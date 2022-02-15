var express = require("express");
const app = express();
const bodyParser = require("body-parser");
var cors = require("cors");
let userRouter = require("./app/controllers/userController");
let moneyTransferRouter = require("./app/controllers/moneyTransferController");

app.use(bodyParser.json());
app.use(cors());

app.use("/accounts.xe", userRouter);
app.use("/moneyTransfer", moneyTransferRouter);
app.listen(3001, () => {
    console.log("this app is running on post 3001");
})