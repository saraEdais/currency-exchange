import classes from './drop-down-list.module.css'
import React from 'react'

const DropDownList = (props) => {
    return (
        <div className={classes.dropDownDiv}>
            <select className={classes.select}>
                {props.list.map((item, index) => {
                    return (
                      <option>
                          {item}
                      </option>  
                    );
                })}
            </select>
        </div>
    )
}

export default DropDownList;
