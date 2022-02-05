import classes from './convert.module.css';
import React, { useEffect, useState } from 'react';
import DropDownList from '../drop-down-list/drop-down-list.component';
import Switcher from '../switcher/switcher.component';
import Button from '../button/button.component';
import ConvertResult from '../convert-result/convert-result.component';
import ConvertInput from '../convert-input/convert-input.component';
import { EuroCircleOutlined } from "@ant-design/icons"

const Convert = () => {
    const [firstCurrency, setFirstCurrency] = useState("AUD");
    const [secondCurrency, setSecondCurrency] = useState("XCD");
    const [amountValue, setAmountValue] = useState(0);
    const [exchangeRate, setExchangeRate] = useState("");
    const [reverseExchangeRate, setReverseExchangeRate] = useState("");
    const [output, setOutput] = useState(0);
    const [currency, setCurrency] = useState({});
    const [isConvert, setIsConvert] = useState(false);

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
    }, []);


    const onSelectFirstCurrencyHandler = (e) => {
        setFirstCurrency(e.target.value);
    }
    const onSelectSecondCurrencyHandler = (e) => {
        setSecondCurrency(e.target.value);
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
                console.log("currenciesId: ", typeof (currenciesId));
                setReverseExchangeRate(result[currenciesId]);
                console.log("reverse exchange rate: ", result[currenciesId]);
            })
            .catch((error) => console.log(error));

        setOutput(amountValue * exchangeRate)
        console.log("output", output)
        setIsConvert(true)
    }

    const onSwitchHandler = () => {
        var temp = firstCurrency;
        setFirstCurrency(secondCurrency);
        setSecondCurrency(temp);
    }

    return (
        <div className={classes.convertComponent}>
            <div className={classes.convertInputsDiv}>
                <ConvertInput label={"Amount"} value={amountValue} onChangeHandler={onAmountValueChangeHandler} />
                <ConvertInput label={"From"} value={firstCurrency} onChangeHandler={onSelectFirstCurrencyHandler} />
                <DropDownList list={currency} />
                <Switcher onSwitchHandler={onSwitchHandler} />
                <ConvertInput label={"To"} value={secondCurrency} onChangeHandler={onSelectSecondCurrencyHandler} />
                <DropDownList list={currency} />
            </div>
            <div className={classes.convertButtonDiv}>
                {
                    (!isConvert && <>
                        <div style={{ display: "flex", alignItems: "center" }}>We use midmarket rates</div>
                        <Button
                            buttonName={"convert"}
                            onClickHandler={onConvertHandler} />
                    </>)
                }
            </div>
            {
                (isConvert && <ConvertResult
                    currency={currency}
                    firstCurrency={firstCurrency}
                    secondCurrency={secondCurrency}
                    amountValue={amountValue}
                    output={output}
                    exchangeRate={exchangeRate}
                    reverseExchangeRate={reverseExchangeRate} />)
            }
        </div>
    );
};

export default Convert;