import classes from './switcher.module.css'
import React from 'react'
import exchangeImage from '../../assets/images/exchange.png'

const Switcher = (props) => {
    return (
        <button className={classes.switcherButton} >
            <img className={classes.exchangeImage} src={exchangeImage}/>
        </button>
    )
}

export default Switcher
