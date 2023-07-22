package main

import (
	"SauravKanchan/web3-credit-card/models"
	"net/http"

	"github.com/labstack/echo/v4"
)

func (r *Repository) SubmitTransaction(c echo.Context) error {
	var transaction models.Transaction
	err := c.Bind(&transaction)
	if err != nil {
		return c.String(http.StatusBadRequest, "bad request")
	}
	// get db from context
	user, err := models.GetUser(r.DB,transaction.From)
	if err != nil {
		return c.String(http.StatusInternalServerError, "could not get user")
	}
	user.Balance += transaction.Amount
	err = models.UpdateUser(r.DB,user)
	if err != nil {
		return c.String(http.StatusInternalServerError, "could not update user")
	}	

	// save the transaction
	err = models.SaveTransaction(r.DB, &transaction)
	if err != nil {
		return c.String(http.StatusInternalServerError, "could not save transaction")
	}
	return c.String(http.StatusOK, "OK")
}

// submit transaction example
// curl -X POST -H "Content-Type: application/json" -d '{"from":"0x123","to":"0x456","amount":100}' http://localhost:8080/submit-transaction