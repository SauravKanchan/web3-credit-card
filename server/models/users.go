package models

import (
	"strings"

	"gorm.io/gorm"
)

type Users struct {
	ID       uint    `gorm:"primary key;autoIncrement" json:"id"`
	Address  string  `gorm:"type:varchar(66);unique;not null" json:"address"`
	Balance  float64 `gorm:"type:float" json:"balance"`
}

func MigrateUsers(db *gorm.DB) error {
	err := db.AutoMigrate(&Users{})
	return err
}

func GetUser(db  *gorm.DB,address string) (*Users, error) {
	var user Users
	user.Address = strings.ToLower(strings.TrimPrefix(address,"0x"))
	err := db.Where("address = ?", user.Address).FirstOrCreate(&user).Error
	if err != nil {
		return nil, err
	}
	return &user, nil
}

// update user data
func UpdateUser(db *gorm.DB, user *Users) error {
	err := db.Save(&user).Error
	if err != nil {
		return err
	}
	return nil
}