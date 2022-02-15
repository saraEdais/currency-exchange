var express = require("express");
var userRoutes = express.Router();
const MoneyTransferService = require("../services/moneyTransferService");
const moneyTransferObj = new MoneyTransferService();

userRoutes.post("/addMoneyTransfer", async (req, res) => {
    const body = req.body;
    return res.send(await moneyTransferObj.addNewMoneyTransfer(body).then((res) => res));
});

module.exports = userRoutes;