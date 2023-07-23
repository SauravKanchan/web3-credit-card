package main

import (
	"SauravKanchan/web3-credit-card/models"
	"fmt"
	"net/http"
	"os"

	"github.com/ethereum/go-ethereum/accounts/abi/bind"
	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/crypto"
	"github.com/ethereum/go-ethereum/ethclient"
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

// api to execute ExecuteTransaction from Esrow.go
func (r *Repository) ExecuteTransaction(c echo.Context) error {
	var userOps IEscrowUserOperation
	err := c.Bind(&userOps)
	if err != nil {
		return c.String(http.StatusBadRequest, "bad request")
	}
	eth_client, err := ethclient.Dial(os.Getenv("RPC_ENDPOINT"))
	if err != nil {
		fmt.Println("could not connect to rpc", err)
		return c.String(http.StatusInternalServerError, "could not connect to rpc")
	}

	conn := bind.ContractBackend(eth_client)
	contract, err := NewIEscrow(common.HexToAddress(os.Getenv("ESCROW_CONTRACT_ADDRESS")), conn)
	if err != nil {
		fmt.Println("could not connect to contract", err)
		return c.String(http.StatusInternalServerError, "could not connect to contract")
	}
	// convert hex to ecdsa.PrivateKey
	private_key, err := crypto.HexToECDSA(os.Getenv("PRIVATE_KEY"))
	if err != nil {
		fmt.Println("error converting private key", err)
		return c.String(http.StatusInternalServerError, "error converting private key")
	}
	// fetch chainId
	chainId, err := eth_client.ChainID(c.Request().Context())
	if err != nil {
		fmt.Println("error fetching chainId", err)
		return c.String(http.StatusInternalServerError, "error fetching chainId")
	}
	auth, err := bind.NewKeyedTransactorWithChainID(private_key, chainId)
	if err != nil {
		fmt.Println("error creating auth", err)
		return c.String(http.StatusInternalServerError, "error creating auth")
	}

	// call the ExecuteTransaction method
	tx, err := contract.ExecuteTransaction(auth, userOps)
	if err != nil {
		fmt.Println("error executing transaction", err)
		return c.String(http.StatusInternalServerError, "error executing transaction")
	}
	return c.JSON(http.StatusOK, tx.Hash().Hex())
}