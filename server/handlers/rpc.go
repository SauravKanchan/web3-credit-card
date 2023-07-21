package handlers

import (
	"compress/gzip"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"net/url"
	"os"

	"github.com/labstack/echo/v4"
)

func gzipResponse(data []byte, w io.Writer) error {
	gz := gzip.NewWriter(w)
	defer gz.Close()

	if _, err := gz.Write(data); err != nil {
		return err
	}
	fmt.Println("gzip encoded response sent")
	return nil
}


func RPC(c echo.Context) error {
	// whatever request we get just formward it to the rpc server
	r := c.Request()
	// make a request to the rpc server
	rpc_url := os.Getenv("RPC_ENDPOINT")
	// convert the above rpc url to url.URL
	if rpc_url == "" {
		fmt.Println("rpc endpoint not found in env")
		return c.String(http.StatusInternalServerError, "rpc endpoint not found in env")
	}

	rpc, err := url.Parse(rpc_url)
	if err != nil {
		fmt.Println("error parsing rpc url", err)
		return c.String(http.StatusInternalServerError, "error parsing rpc url")
	}
	request := &http.Request{
		Method: r.Method,
		URL:    rpc,
		Header: r.Header,
		Body:   r.Body,
	}

	client := &http.Client{}
	resp, err := client.Do(request)
	if err != nil {
		fmt.Println("error making request to rpc server", err)
		return c.String(http.StatusInternalServerError, "error making request to rpc server")
	}

	defer resp.Body.Close()
	var body []byte
	if resp.Header.Get("Content-Encoding") == "gzip" {
		//print response payload
		var payload map[string]interface{}
		c.Bind(&payload)
		fmt.Println("response is gzip encoded", payload)
        reader, err := gzip.NewReader(resp.Body)
        if err != nil {
            panic(err)
        }
        defer reader.Close()
        // Read the decompressed response body
        body, err = io.ReadAll(reader)
        if err != nil {
            panic(err)
        }
		// write the body to gzip writer
		// return gzip encoded response

		return gzipResponse(body, c.Response().Writer)
    } else {
        // The response is not gzip encoded, so read it directly
        body, err = io.ReadAll(resp.Body)
        if err != nil {
            panic(err)
        }
		var bodyMap map[string]interface{}
		err = json.Unmarshal(body, &bodyMap)
		if err != nil {
			fmt.Println("error decoding response from rpc server", err)
			c.String(http.StatusInternalServerError, "error decoding response from rpc server")
		}

		fmt.Println("response from rpc server", bodyMap)
		return c.JSON(resp.StatusCode, bodyMap)
    }
	return c.JSON(resp.StatusCode, body)
}