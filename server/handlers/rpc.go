package handlers

import (
	"SauravKanchan/web3-credit-card/config"
	"bytes"
	"compress/gzip"
	"encoding/json"
	"fmt"
	"io"
	"io/ioutil"
	"net/http"
	"net/url"
	"os"
	"strings"

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

type JSONData struct {
	Method  string   `json:"method"`
	Params  []interface{} `json:"params"`
	ID      int      `json:"id"`
	JSONRPC string   `json:"jsonrpc"`
}

type Param struct {
	To   string `json:"to"`
	Data string `json:"data"`
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

	requestPayload := JSONData{}
	err = json.NewDecoder(r.Body).Decode(&requestPayload)
	if err != nil {
		fmt.Println("error decoding request payload aaaa", err)
		return c.String(http.StatusInternalServerError, "error decoding request payload")
	}
	fmt.Println("request payload", requestPayload)
	// convert requestPayload to bytes buffer
	requestPayloadBytes, err := json.Marshal(requestPayload)
	if err != nil {
		fmt.Println("error marshalling request payload asdf", err)
		return c.String(http.StatusInternalServerError, "error marshalling request payload")
	}
	var to string;
	if len(requestPayload.Params) > 0 {
		// We expect the first parameter to be a map[string]interface{}
		if paramsMap, ok := requestPayload.Params[0].(map[string]interface{}); ok {
			to = paramsMap["to"].(string)
		} else {
			fmt.Println("Invalid format for 'params' array")
		}
	}

	// compare the to address with the token address in case insensitive manner
	if strings.EqualFold(to,config.TOKEN_ADDRESS) {
		// return 1000 tokens as balance
		fmt.Println("returning custom response payload")
		responsePayload := make(map[string]interface{})
		responsePayload["jsonrpc"] = "2.0"
		responsePayload["id"] = requestPayload.ID
		responsePayload["result"] = "0x3e8"
		responsePayload["result"] = fmt.Sprintf("0x%064s", strings.TrimPrefix(responsePayload["result"].(string), "0x"))
		return c.JSON(http.StatusOK, responsePayload)
	}
	request := &http.Request{
		Method: r.Method,
		URL:    rpc,
		Header: r.Header,
		Body:   ioutil.NopCloser(bytes.NewBuffer(requestPayloadBytes)),
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
        reader, err := gzip.NewReader(resp.Body)
        if err != nil {
            panic(err)
        }
        defer reader.Close()
        body, err = io.ReadAll(reader)
        if err != nil {
            panic(err)
        }
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
		return c.JSON(resp.StatusCode, bodyMap)
    }
}