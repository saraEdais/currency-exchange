import React from "react";
import classes from './dropDownContentItem.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const DropDownContentItem = (props) => {
  return (
    <div className={classes.dropdownContentItem}>
    <FontAwesomeIcon
      icon={props.icon}
      color="#006FE8"
      size="lg"
    />
    <a href="#">{props.feature}</a>
  </div>
  );
};

export default DropDownContentItem;
