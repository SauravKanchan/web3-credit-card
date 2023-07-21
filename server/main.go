package main

import (
	"SauravKanchan/web3-credit-card/cmd/api/handlers"

	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()	
	e.GET("/health", handlers.HealthCheck)
	e.Logger.Fatal(e.Start(":8080"))
}