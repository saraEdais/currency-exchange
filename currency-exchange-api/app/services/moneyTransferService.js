const MoneyTransfer = require("../models/moneyTransfer");
const moneyTransferObj = new MoneyTransfer();

class MoneyTransferService {

    async addNewMoneyTransfer(moneyTransfer){
        return await moneyTransferObj.addMoneyTransfer(moneyTransfer).then((res) => res);
    };
}

module.exports = MoneyTransferService;