import React from 'react';
import classes from './convert-input.module.css'
import { CloseOutlined } from "@ant-design/icons"

const ConvertInput = (props) => {

  const closedFromHandel = () => {
    props.closeFromHandel()
  }

  const closedToHandel = () => {
    props.closeToHandel()
  }

  return <div className={classes.currencyInputDiv}>
    <label>{props.label}</label>
    <input
      className={classes.currencyInput}
      type="text"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChangeHandler} />
    {
      (props.label === "Amount") && <div className={classes.symbol}>{props.symbol}</div>

    }
    {
      (props.label === "From") && <div><CloseOutlined
        className={classes.fromClose}
        onClick={closedFromHandel}
      /></div>
    }
    {
      (props.label === "To") && <div><CloseOutlined
      className={classes.fromClose}
      onClick={closedToHandel}
    /></div>
    }

  </div>;
};

export default ConvertInput;
