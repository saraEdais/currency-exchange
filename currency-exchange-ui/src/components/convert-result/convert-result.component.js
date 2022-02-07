import React from 'react';
import classes from './convert-result.module.css';

const ConvertResult = (props) => {
    return (
        <div className={classes.resultDiv}>
            <p>
                {props.amountValue} {props.firstCurrency} =
            </p>
            <h2>
                {(props.amountValue)*(props.exchangeRate)} {props.secondCurrency}
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
                    <div>Canadian Dollar to East Caribbean Dollar conversion — Last updated Jan 31, 2022, 20:46 UTC</div>
                </div>
            </div>

        </div>
    );
};

export default ConvertResult;