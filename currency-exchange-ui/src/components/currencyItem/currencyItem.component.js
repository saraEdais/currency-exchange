// import classes from "./currencyItem.module.css";
import React from "react";
import classes from "./currencyItem.module.css"
const CurrencyItem = (props) => {
  return (
    <>
      {(props.list).map((key, index) => (
        <tr key={index}>
          <td>
            <img
              src={`https://flagcdn.com/20x15/${(key.id).toLowerCase()}.png`}
              alt="flag"
            />
            {key.currencyName}
          </td>
          <td>{props.amount[key.currencyId]}</td>
          <td>
            {(((props.endRate[key.currencyId]-props.startRate[key.currencyId])/props.endRate[key.currencyId])*100).toFixed(5)}
          </td>
        </tr>
      ))}
    </>
  );
};

export default CurrencyItem;
