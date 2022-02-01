import classes from './convert.module.css';
import React, { useEffect, useState } from 'react';
import DropDownList from '../drop-down-list/drop-down-list.component';
import Switcher from '../switcher/switcher.component';
import AmountInput from '../amount-input/amount.component';
import ButtonComp from '../button/button.component';
import ConvertResult from '../convert-result/convert-result.component';


const Convert = () => {
    const buttonName = "convert";

    const [firstCurrency, setFirstCurrency] = useState("AFN");
    const [secondCurrency, setsecondCurrency] = useState("AFN");

    console.log("first: ", firstCurrency);
    console.log("second: ", secondCurrency);

    const [amountValue, setAmountValue] = useState(1);
    const [exchangeRate, setExchangeRate] = useState();
    const [reverseExchangeRate, setReverseExchangeRate] = useState();

    const [currency, setCurrency] = useState({});
    const [flags, setFlags] = useState({});

    useEffect(async () => {
        await fetch('https://free.currconv.com/api/v7/countries?apiKey=bf19efdeacde3c60c111')
            .then(async (res) => {
                const result = await res.json();
                console.log("result.results", result.results);
                setCurrency(result.results);
            })
            .catch((error) => {
                console.log(error);
            });

        await fetch('https://flagcdn.com/en/codes.json')
            .then(async (res) => {
                const result = await res.json();
                console.log("flag: ", result);
                setFlags(result);
            })
            .catch((error) => console.log(error));

    }, []);

    const onSelectFirstCurrencyHandler = (e) => {
        setFirstCurrency(e.target.value);
    }
    const onSelectSecondCurrencyHandler = (e) => {
        setsecondCurrency(e.target.value);
    }

    const onAmountValueChangeHandler = (e) => {
        setAmountValue(e.target.value)
    }

    const onConvertHandler = async () => {
        console.log("amount: ", amountValue);
        await fetch(`https://free.currconv.com/api/v7/convert?q=${firstCurrency}_${secondCurrency}&compact=ultra&apiKey=bf19efdeacde3c60c111`)
            .then(async (res) => {
                const result = await res.json();
                console.log("result: ", result);
                const currenciesId = `${firstCurrency}_${secondCurrency}`;
                console.log("currenciesId: ", currenciesId);
                setExchangeRate(result[currenciesId]);
                console.log("exchange rate: ", result[currenciesId]);
            })
            .catch((error) => console.log(error));

        await fetch(`https://free.currconv.com/api/v7/convert?q=${secondCurrency}_${firstCurrency}&compact=ultra&apiKey=bf19efdeacde3c60c111`)
            .then(async (res) => {
                const result = await res.json();
                console.log("result: ", result);
                const currenciesId = `${secondCurrency}_${firstCurrency}`;
                console.log("currenciesId: ", currenciesId);
                setReverseExchangeRate(result[currenciesId]);
                console.log("reverse exchange rate: ", result[currenciesId]);
            })
            .catch((error) => console.log(error));
    }

    const onSwitchHandler = () => {


    }

    return (
        <div className={classes.convert}>
            <div className={classes.convertBox}>
                <label>Amount</label>
                <AmountInput value={amountValue} onAmountValueChangeHandler={onAmountValueChangeHandler} />
                <label>From</label>
                <DropDownList flags={flags} list={currency} onSelectCurrencyHandler={onSelectFirstCurrencyHandler} />
                <Switcher onSwitchHandler={onSwitchHandler} />
                <label>To</label>
                <DropDownList list={currency} onSelectCurrencyHandler={onSelectSecondCurrencyHandler} />
            </div>

            <ButtonComp buttonName={buttonName} onConvertHandler={onConvertHandler} />
            <ConvertResult currency={currency} firstCurrency={firstCurrency} secondCurrency={secondCurrency} amountValue={amountValue} exchangeRate={exchangeRate} reverseExchangeRate={reverseExchangeRate} />
        </div>
    );
};

export default Convert;
