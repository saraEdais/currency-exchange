import classes from './drop-down-list.module.css'
import React from 'react'

const DropDownList = (props) => {
    return (
        <div className={classes.dropDownDiv}>
            <select className={classes.select}>
                {/* {props.list.map((item, index) => {
                    return (
                      <option>
                          {item}
                      </option>  
                    );
                })} */}
                {
                    Object.keys(props.list).map((key, index) => (
                        <option key={index}>
                            {props.list[key].currencyId} - {props.list[key].currencyName}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

export default DropDownList;
