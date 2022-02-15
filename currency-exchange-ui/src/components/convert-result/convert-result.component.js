import React from 'react';
import classes from './convert-result.module.css';
import Clock from 'react-live-clock';

const ConvertResult = (props) => {
    return (
        <div className={classes.resultDiv}>
            <p>
                {props.amountValue} {props.firstCurrencyName} =
            </p>
            <h2>
                {(props.amountValue) * (props.exchangeRate)} {props.secondCurrencyName}
            </h2>
            <div className={classes.currencyRateDiv}>
                <div className={classes.currency}>
                    <span className={classes.currencyRate}>
                        1 {props.firstCurrency} = {props.exchangeRate} {props.secondCurrency} <br />
                        1 {props.secondCurrency} = {props.reverseExchangeRate} {props.firstCurrency}
                    </span>
                    <div>We use midmarket rates </div>
                </div>
                <div className={classes.transferButtonDiv}>
                    <button>view transfer quote</button>
                    <div><span className={classes.currencyName}>{props.firstCurrencyName}</span>
                        to<span className={classes.currencyName}>{props.secondCurrencyName}</span>
                        conversion — Last updated <Clock format={'HH:mm:ss'} ticking={false} timezone={'UTC/Pacific'} /> 
                         UTC</div>
                </div>
            </div>

        </div>
    );
};

export default ConvertResult;
