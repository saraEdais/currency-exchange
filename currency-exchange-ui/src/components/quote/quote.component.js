import React from 'react';
import classes from './quote.module.css'
export const Quote = (props) => {
  return (
    <div>
      <div className={classes.header}>
        <h1 className={classes.title}>{props.title}</h1>
        <p className={classes.subTitle}>{props.subTitle}</p>
      </div>
    </div>
  )
};
export default Quote;