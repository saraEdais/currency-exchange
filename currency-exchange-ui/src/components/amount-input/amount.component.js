import React from 'react';
import classes from './amount.module.css';

const AmountInput = (props) => {
  return (
    <div>
      <input className={classes.amountInput} value={props.value} onChange={props.onAmountValueChangeHandler} />
    </div>
  );
};

export default AmountInput;
