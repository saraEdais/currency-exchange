import React from 'react';
import classes from './convert-input.module.css';

const AmountInput = (props) => {
  return (
    <div className={classes.currencyInputDiv}>
      <label>{props.label}</label>
      <input
        className={classes.currencyInput}
        type="text"
        placeholder='type to search ...'
        value={props.value}
        onChange={props.onChangeHandler} />
    </div>
  );
};

export default AmountInput;
