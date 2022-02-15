import classes from './switcher.module.css'
import React from 'react'
import exchangeImage from '../../assets/images/exchange.png'

const Switcher = (props) => {
    return (
        <div className={classes.switcherButtonDiv}>   
            <button className={classes.switcherButton} onClick={props.onSwitchHandler}>
                <img className={classes.exchangeImage} src={exchangeImage} />
            </button>
        </div>
    )
}

export default Switcher
