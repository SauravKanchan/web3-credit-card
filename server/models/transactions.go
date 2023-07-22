// transactions model

package models

import "gorm.io/gorm"

type Transaction struct {
	ID        uint    `gorm:"primary key;autoIncrement" json:"id"`
	From      string  `gorm:"type:varchar(66);not null" json:"from"`
	To        string  `gorm:"type:varchar(66);not null" json:"to"`
	Amount    float64 `gorm:"type:float" json:"amount"`
	Signature string  `gorm:"type:varchar(66);not null" json:"signature"`
}

func MigrateTransactions(db *gorm.DB) error {
	err := db.AutoMigrate(&Transaction{})
	return err
}

func SaveTransaction(db *gorm.DB, transaction *Transaction) error {
	err := db.Create(&transaction).Error
	if err != nil {
		return err
	}
	return nil
}