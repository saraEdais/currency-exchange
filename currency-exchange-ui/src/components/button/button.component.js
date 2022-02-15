import classes from './button.module.css'
import React from 'react'

const Button = (props) => {
    return (
        <button className={classes.buttonComp} onClick={props.onClickHandler}>
            {props.buttonName}
        </button>
    )
}

export default Button;
