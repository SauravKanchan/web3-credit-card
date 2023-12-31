package main

import (
	"SauravKanchan/web3-credit-card/handlers"
	"SauravKanchan/web3-credit-card/storage"
	"fmt"
	"log"

	"github.com/joho/godotenv"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"gorm.io/gorm"
)

type Repository struct {
	DB *gorm.DB
}



func (r *Repository) SetupRoutes(e *echo.Echo) {
	e.GET("/health", handlers.HealthCheck)
	e.POST("/rpc", r.RPC)
	e.POST("/submit-transaction", r.SubmitTransaction)
	e.POST("/execute-transaction", r.ExecuteTransaction)
}

func loadEnv() error {
	err := godotenv.Load("../.env")
	if err != nil {
		return fmt.Errorf("unable to load env file: %w", err)
	}
	return nil
}

func main() {
	e := echo.New()	
	e.Use(middleware.CORS())

	err := loadEnv()
	if err != nil {
		log.Fatal("could not load the env file")
	}
	db, err := storage.NewConnection()
	if err != nil {
		log.Fatal("could not load the database")
	}
	err = storage.Migrate(db)
	// TODO: only migrate when migrate command is paased
	if err != nil {
		log.Fatal("could not migrate the database", err)
	}
	r := Repository{
		DB: db,
	}
	// setup r in echo context
	e.Use(func(next echo.HandlerFunc) echo.HandlerFunc {
		return func(c echo.Context) error {
			c.Set("repository", &r)
			return next(c)
		}
	})
	r.SetupRoutes(e)
	e.Logger.Fatal(e.Start(":9010"))
}