import React, { useState } from 'react';
import classes from "./sendForm.module.css";

const SendForm = (props) => {
    const [senderName, setSenderName] = useState("");
    const [receiverName, setReceiverName] = useState("");
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("");
    const [visaCardValue, setVisaCardValue] = useState("");


    const onClickSendHandler = async () => {

        if (senderName.length === 0 || receiverName.length === 0 || visaCardValue.length === 0 || amount.length === 0 || currency.length === 0) {
            alert("you should enter all requirements");
            console.log("1111");
            return;
        }
        await fetch("http://localhost:3001/moneyTransfer/addMoneyTransfer", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "senderName":senderName,
                "receiverName":receiverName,
                "transferAmount":amount,
                "currency":currency
            }),

        })
        .then((res) => {
            console.log(res);
            console.log(res.body);

          })
          .catch((err) => {
            console.error(err);
          });
        console.log("222");

    }
    return <div className={classes.SendForm}>
        <div style={{ display: "flex" }}>
            <div className={classes.inputDiv}>
                <span>Sender Name</span>
                <input
                    type="text"
                    placeholder='sender name'
                    value={senderName}
                    onChange={(e) => { setSenderName(e.target.value) }} />
            </div>
            <div className={classes.inputDiv}>
                <span>Receiver Name</span>
                <input
                    type="text"
                    placeholder='receiver name'
                    value={receiverName}
                    onChange={(e) => { setReceiverName(e.target.value) }} />
            </div>
        </div>
        <div style={{ display: "flex" }}>
            <div className={classes.inputDiv}>
                <span>Amount</span>
                <input
                    type="text"
                    placeholder='amount'
                    value={amount}
                    onChange={(e) => { setAmount(e.target.value) }} />
            </div>
            <div className={classes.inputDiv}>
                <span>Currency</span>
                <input
                    type="text"
                    placeholder='select currency'
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                />
            </div>
        </div>
        <div className={classes.inputDiv}>
            <span>Visa Card</span>
            <input
                type="text"
                placeholder='visa card'
                value={visaCardValue}
                onChange={(e) => setVisaCardValue(e.target.value)}
                style={{ width: "94%" }} />
        </div>

        <div>
            <button
                className={classes.buttonStyle}
                onClick={onClickSendHandler}>
                send
            </button>
        </div>
    </div>;
};

export default SendForm;
