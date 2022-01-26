import classes from './drop-down-list.module.css'
import React from 'react'

const DropDownList = (props) => {
    return (
        <div className={classes.dropDownDiv}>
            <select className={classes.select} onChange={props.onSelectCurrencyHandler}>
                {/* {props.list.map((item, index) => {
                    return (
                      <option>
                          {item}
                      </option>  
                    );
                })} */}
                {
                    Object.keys(props.list).map((key, index) => (
                        <option value={props.list[key].currencyId} key={index}>
                            {props.list[key].currencyId} - {props.list[key].currencyName}
                            {/* {console.log("value", props.list[key].id)} */}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

export default DropDownList;
