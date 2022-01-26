import classes from './convert.module.css';
import React, { useEffect, useState } from 'react';
import DropDownList from '../../components/drop-down-list/drop-down-list.component';
import Switcher from '../../components/switcher/switcher.component';
import AmountInput from '../../components/amount-input/amount.component';
import ButtonComp from '../../components/button/button.component';


const Convert = () => {
    const buttonName = "convert";

    const [firstCurrency, setFirstCurrency] = useState("AFN");
    const [secondCurrency, setsecondCurrency] = useState("AFN");

    console.log("first: ", firstCurrency);
    console.log("second: ", secondCurrency);

    const [amountValue, setAmountValue] = useState(1);
    const [exchangeRate, setExchangeRate] = useState();

    const [currenciesId, setCurrenciesId] = useState();

    const [currency, setCurrency] = useState({});
    useEffect(async () => {
        await fetch('https://free.currconv.com/api/v7/countries?apiKey=bf19efdeacde3c60c111')
            .then(async (res) => {
                const result = await res.json();
                console.log(result.results);
                setCurrency(result.results);
                // console.log("cur", currency)
            })
            .catch((error) => {
                console.log(error);
            });

        // setFirstCurrency(currency[Object.keys(currency)[0]]);
        // console.log("currency[Object.keys(currency)[0]]", currency[Object.keys(currency)[0]])
    }, []);

    const onSelectFirstCurrencyHandler = (e) => {
        // console.log("value", e.target.value)
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
                // const t = {`firstCurrency + "_" + secondCurrency`};
                setCurrenciesId(`${firstCurrency}_${secondCurrency}`);
                console.log("currenciesId: ", currenciesId);
                setExchangeRate(result.currenciesId); //change 
                console.log("exchange rate: ", result.currenciesId);
            })
            .catch((error) => console.log(error));
    }

    return (
        <div>
            convert
            <DropDownList list={currency} onSelectCurrencyHandler={onSelectFirstCurrencyHandler} />
            <Switcher />
            <DropDownList list={currency} onSelectCurrencyHandler={onSelectSecondCurrencyHandler} />
            <AmountInput value={amountValue} onAmountValueChangeHandler={onAmountValueChangeHandler} />
            <ButtonComp buttonName={buttonName} onConvertHandler={onConvertHandler} />
        </div>
    );
};

export default Convert;
