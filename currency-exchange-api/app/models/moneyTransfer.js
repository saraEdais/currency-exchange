const connection = require("../connections/index");

class MoneyTransfer {

    #id;
    #senderId;
    #receiverId;
    #transferAmount;
    #currency;

    async addMoneyTransfer(moneyTransfer) {

        const isSenderExist = await connection.query(`SELECT * FROM users WHERE username='${moneyTransfer.senderName}'`)
            .then(([rows, fields]) => {
                if (rows.length > 0) {
                    return true;
                }
                else return false;
            });
        if (!isSenderExist) {
            return "the sender username dose not exists in the DataBase";
        }

        const isReceiverExist = await connection.query(`SELECT * FROM users WHERE username='${moneyTransfer.receiverName}'`)
            .then(([rows, fields]) => {
                if (rows.length > 0) {
                    return true;
                }
                else return false;
            });
        if (!isReceiverExist) {
            return "the receiver username dose not exists in the DataBase";
        }


        const sqlQuery = `
        INSERT INTO moneytransfer (id,senderId,receiverId,transferAmount,currency) 
        VALUES (NULL, 
            (SELECT id FROM users WHERE username='${moneyTransfer.senderName}'), 
            (SELECT id FROM users WHERE username='${moneyTransfer.receiverName}'), 
            '${moneyTransfer.transferAmount}', 
            '${moneyTransfer.currency}');`;

        return await connection.query(sqlQuery)
            .then(([rows, fields]) => {
                return 'successfully added a new money transfer';
            })
            .catch((err) => err);
    }
}

module.exports = MoneyTransfer;