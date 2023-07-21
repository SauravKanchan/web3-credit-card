package models

import "gorm.io/gorm"

type Users struct {
	ID       uint    `gorm:"primary key;autoIncrement" json:"id"`
	Address  string  `gorm:"type:varchar(66);unique;not null" json:"address"`
	Balance  float64 `gorm:"type:float" json:"balance"`
}

func MigrateUsers(db *gorm.DB) error {
	err := db.AutoMigrate(&Users{})
	return err
}