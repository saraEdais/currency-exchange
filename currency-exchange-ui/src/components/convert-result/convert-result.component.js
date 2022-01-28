import React from 'react';
import classes from './convert-result.module.css';

const ConvertResult = (props) => {
    return (
        <div>
            {props.amountValue} {props.firstCurrency}<br /> 
            {/* {props.currency[firstCurrency]} */}
            {props.amountValue*props.exchangeRate} {props.secondCurrency}
            <br/><br/>
            1 {props.firstCurrency} = {props.exchangeRate} {props.secondCurrency} <br />
            1 {props.secondCurrency} = {props.reverseExchangeRate} {props.firstCurrency}

        </div>
    );
};

export default ConvertResult;
