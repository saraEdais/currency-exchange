import React, { useState } from 'react';
import classes from "./sendForm.module.css";

const SendForm = (props) => {
    const [senderName, setSenderName] = useState("");
    const [receiverName, setReceiverName] = useState("");
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
                <input type="text" placeholder='amount' />
            </div>
            <div className={classes.inputDiv}>
                <span>Country</span>
                <input type="text" placeholder='country' />
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
                onClick={onClickSendHandler}>send
            </button>
        </div>
    </div>;
};

export default SendForm;
