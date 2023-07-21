package storage

import (
	"SauravKanchan/web3-credit-card/models"
	"fmt"
	"os"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func NewConnection() (*gorm.DB, error) {
	dsn := fmt.Sprintf("%s:%s@tcp(%s)/%s?charset=utf8mb4&parseTime=True&loc=Local",
		os.Getenv("MYSQL_USER"),
		os.Getenv("MYSQL_PASSWORD"),
		os.Getenv("MYSQL_HOST"),
		os.Getenv("MYSQL_DATABASE"))
	fmt.Println(dsn)
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		return nil,fmt.Errorf("error connecting to database: %w", err)
	}


	return db, nil
}

func Migrate(db *gorm.DB) error {
	fmt.Println("Migrating the schema...")
	err := models.MigrateUsers(db)
	if err != nil {
		return fmt.Errorf("error migrating users: %w", err)
	}
	return nil
}