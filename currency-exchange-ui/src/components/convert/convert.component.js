import classes from './convert.module.css';
import React, { useEffect, useState } from 'react';
import DropDownList from '../drop-down-list/drop-down-list.component';
import Switcher from '../switcher/switcher.component';
import Button from '../button/button.component';
import ConvertResult from '../convert-result/convert-result.component';
import ConvertInput from '../convert-input/convert-input.component';
import { EuroCircleOutlined } from "@ant-design/icons"
import { useLocation } from 'react-router-dom';

const Convert = (props) => {
    let location = useLocation();
    const [firstCurrency, setFirstCurrency] = useState("AUD");
    const [secondCurrency, setSecondCurrency] = useState("XCD");
    const [amountValue, setAmountValue] = useState(0);
    const [exchangeRate, setExchangeRate] = useState("");
    const [reverseExchangeRate, setReverseExchangeRate] = useState("");
    const [isConvert, setIsConvert] = useState(false);

    const onSelectFirstCurrencyHandler = (e) => {
        setFirstCurrency(e.target.value);
    }
    const onSelectSecondCurrencyHandler = (e) => {
        setSecondCurrency(e.target.value);
    }

    const onAmountValueChangeHandler = (e) => {
        setAmountValue(e.target.value)
    }

    useEffect(() => {
      if(isConvert){
        onConvertHandler()
      }
    }, [amountValue,firstCurrency,secondCurrency]);
    
    useEffect(() => {
        if(location.pathname==="/currency-converter/"){
            props.PathNameHandel(location.pathname) 
        }
        else{
            props.PathNameHandel("/")
        }
    }, []);
    

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
                <ConvertInput
                    label={"Amount"}
                    value={amountValue}
                    placeholder={""}
                    onChangeHandler={onAmountValueChangeHandler} />
                <ConvertInput
                    label={"From"}
                    value={firstCurrency}
                    placeholder={"type to search ..."}
                    onChangeHandler={onSelectFirstCurrencyHandler} />
                <DropDownList list={props.currencyObj} style={"1"}/>
                <Switcher onSwitchHandler={onSwitchHandler} />
                <ConvertInput
                    label={"To"}
                    value={secondCurrency}
                    placeholder={"type to search ..."}
                    onChangeHandler={onSelectSecondCurrencyHandler} />
                <DropDownList list={props.currencyObj} style={"2"}/>
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
                    currency={props.currencyObj}
                    firstCurrency={firstCurrency}
                    secondCurrency={secondCurrency}
                    amountValue={amountValue}
                    exchangeRate={exchangeRate}
                    reverseExchangeRate={reverseExchangeRate} />)
            }
        </div>
    );
};

export default Convert;