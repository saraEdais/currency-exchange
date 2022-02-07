import classes from './drop-down-list.module.css'
import React from 'react'

const DropDownList = (props) => {
    return (

        <div className={props.style==="1"?classes.dropDownListDiv1:classes.dropDownListDiv2}>
            {
                Object.keys(props.list).map((key, index) => (
                    <div value={props.list[key].currencyId} key={index} style={{display:"flex"}}>
                        <img className={classes.flagsStyle} src={`https://flagcdn.com/20x15/${(props.list[key].id).toLowerCase()}.png`} />
                        <div>
                            {props.list[key].currencyId} - {props.list[key].currencyName}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default DropDownList;