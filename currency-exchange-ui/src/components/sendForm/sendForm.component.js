import React, { useState } from 'react';
import classes from "./sendForm.module.css";
import DropDownList from '../drop-down-list/drop-down-list.component';

const SendForm = (props) => {
    const [senderName, setSenderName] = useState("");
    const [receiverName, setReceiverName] = useState("");
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("");
    const [visaCardValue, setVisaCardValue] = useState("");

    const onClickSendHandler = () => {
        if (senderName.length !== 0 || receiverName.length !== 0 || visaCardValue.length !== 0) {
            props.handelSendData(senderName, receiverName, visaCardValue);
            setSenderName("");
            setReceiverName("");
            setVisaCardValue("")
        }
        else {
            alert("you should enter all requirements")
        }
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
