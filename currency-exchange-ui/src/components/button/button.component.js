import classes from './button.module.css'
import React from 'react'

const ButtonComp = (props) => {
    return (
        <button className={classes.buttonComp} >
            {props.buttonName}
        </button>
    )
}

export default ButtonComp
