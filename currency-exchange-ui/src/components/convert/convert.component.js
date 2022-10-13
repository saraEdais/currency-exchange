import classes from './convert.module.css';
import React, { useEffect, useState } from 'react';
import DropDownList from '../drop-down-list/drop-down-list.component';
import Switcher from '../switcher/switcher.component';
import Button from '../button/button.component';
import ConvertResult from '../convert-result/convert-result.component';
import ConvertInput from '../convert-input/convert-input.component';
import { EuroCircleOutlined, DownOutlined } from "@ant-design/icons"
import { useLocation } from 'react-router-dom';

const Convert = (props) => {
    let location = useLocation();
    const [amountValue, setAmountValue] = useState(0);
    const [exchangeRate, setExchangeRate] = useState("");
    const [reverseExchangeRate, setReverseExchangeRate] = useState("");
    const [isConvert, setIsConvert] = useState(false);
    const [isCurrencyFromHandel, setIsCurrencyFromHandel] = useState(false);
    const [isCurrencyToHandel, setIsCurrencyToHandel] = useState(false);
    const [searchForCurrency, setSearchForCurrency] = useState("")
    const [currencyFromInformation, setCurrencyFromInformation] = useState({
        flagId: "",
        currencyName: "",
        currencyId: "",
        currencySymbol: ""
    });

    const [currencyToInformation, setCurrencyToInformation] = useState({
        flagId: "",
        currencyName: "",
        currencyId: "",
        currencySymbol: ""
    });

    const onAmountValueChangeHandler = (e) => {
        setAmountValue(e.target.value)
    }
    const onFirstCurrencyChangeHandler = (e) => {
        setSearchForCurrency(e.target.value)
    }
    const onSecondCurrencyChangeHandler = (e) => {
        setSearchForCurrency(e.target.value)
    }
    const dropDownFromHandel = () => {
        setIsCurrencyFromHandel(true)
    }
    const dropDownToHandel = () => {
        setIsCurrencyToHandel(true)
    }

    useEffect(() => {
        setInterval(() => {
            if (isConvert) {
                onConvertHandler()
            }
        }, 30000);

    }, [amountValue, currencyFromInformation, currencyToInformation]);

    useEffect(() => {
        if (location.pathname === "/currency-converter/") {
            props.PathNameHandel(location.pathname)
        }
        else {
            props.PathNameHandel("/")
        }
    }, []);

    useEffect(() => {
        Object.keys(props.currencyObj).filter(key => {
            if (key === "AU") {
                setCurrencyFromInformation({
                    flagId: props.currencyObj[key].id,
                    currencyName: props.currencyObj[key].currencyName,
                    currencyId: props.currencyObj[key].currencyId,
                    currencySymbol: props.currencyObj[key].currencySymbol
                })
            }
            else if (key === "GB") {
                setCurrencyToInformation({
                    flagId: props.currencyObj[key].id,
                    currencyName: props.currencyObj[key].currencyName,
                    currencyId: props.currencyObj[key].currencyId,
                    currencySymbol: props.currencyObj[key].currencySymbol
                })
            }
        })
    }, [])


    useEffect(() => {
        console.log(currencyFromInformation)
    }, [isCurrencyToHandel, isCurrencyFromHandel]);

    const onConvertHandler = async () => {
        console.log("amount: ", amountValue);
        await fetch(`https://free.currconv.com/api/v7/convert?q=${currencyFromInformation.currencyId}_${currencyToInformation.currencyId}&compact=ultra&apiKey=bf19efdeacde3c60c111`)
            .then(async (res) => {
                const result = await res.json();
                const currenciesId = `${currencyFromInformation.currencyId}_${currencyToInformation.currencyId}`;
                setExchangeRate(result[currenciesId]);
            })
            .catch((error) => console.log(error));

        await fetch(`https://free.currconv.com/api/v7/convert?q=${currencyToInformation.currencyId}_${currencyFromInformation.currencyId}&compact=ultra&apiKey=bf19efdeacde3c60c111`)
            .then(async (res) => {
                const result = await res.json();
                const currenciesId = `${currencyToInformation.currencyId}_${currencyFromInformation.currencyId}`;
                setReverseExchangeRate(result[currenciesId]);
            })
            .catch((error) => console.log(error));
        setIsConvert(true)
    }

    const onSwitchHandler = () => {
        let temp = currencyFromInformation
        setCurrencyFromInformation(currencyToInformation)
        setCurrencyToInformation(temp)
    }

    const currencyFromInformationHandel = (info) => {
        setCurrencyFromInformation(info)
    }
    const currencyToInformationHandel = (info) => {
        setCurrencyToInformation(info)
    }
    const closeFromHandel = () => {
        setIsCurrencyFromHandel(false)
    }
    const closeToHandel = () => {
        setIsCurrencyToHandel(false)
    }


    return (
        <div className={classes.convertComponent}>
            <div className={classes.convertInputsDiv}>
                <ConvertInput
                    label={"Amount"}
                    value={amountValue}
                    placeholder={"enter a number"}
                    onChangeHandler={onAmountValueChangeHandler}
                    symbol={currencyFromInformation.currencySymbol}
                />
                {(!isCurrencyFromHandel) &&
                    <div className={classes.fromPart}>
                        <label className={classes.fromLabel}>From</label>
                        <div className={classes.currency} onClick={dropDownFromHandel}>
                            <img className={classes.flagsStyle} src={`https://flagcdn.com/${(currencyFromInformation.flagId).toLowerCase()}.svg`}></img>
                            <div>{currencyFromInformation.currencyId}-{currencyFromInformation.currencyName}</div>
                            <DownOutlined className={classes.fromIcon} />
                        </div>
                    </div>}
                {(isCurrencyFromHandel) && <div  className={classes.dropDownInput}>
                    <ConvertInput
                        label={"From"}
                        placeholder={"type to search ..."}
                        onChangeHandler={onFirstCurrencyChangeHandler}
                        closeFromHandel={closeFromHandel}
                    />
                    <DropDownList
                        list={props.currencyObj}
                        style={"1"}
                        currencyFromInformation={currencyFromInformationHandel}
                        searchForCurrency={searchForCurrency}
                        dropDownFromHandel={dropDownFromHandel}
                    />
                </div>
                }

                <Switcher onSwitchHandler={onSwitchHandler} />
                {(!isCurrencyToHandel) &&
                    <div className={classes.fromPart}>
                        <label className={classes.fromLabel}>To</label>
                        <div className={classes.currency} onClick={dropDownToHandel}>
                            <img className={classes.flagsStyle} src={`https://flagcdn.com/${(currencyToInformation.flagId).toLowerCase()}.svg`}></img>
                            <div>{currencyToInformation.currencyId}-{currencyToInformation.currencyName}</div>
                            <DownOutlined className={classes.toIcon} />
                        </div>
                    </div>
                }

                {(isCurrencyToHandel) && <div className={classes.dropDownInput}>
                    <ConvertInput
                        label={"To"}
                        placeholder={"type to search ..."}
                        onChangeHandler={onSecondCurrencyChangeHandler}
                        closeToHandel={closeToHandel}
                    />
                    <DropDownList
                        list={props.currencyObj}
                        style={"2"}
                        currencyToInformation={currencyToInformationHandel}
                        searchForCurrency={searchForCurrency}
                        dropDownToHandel={dropDownToHandel}
                    />
                </div>}
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
                    firstCurrency={currencyFromInformation.currencyId}
                    firstCurrencyName={currencyFromInformation.currencyName}
                    secondCurrency={currencyToInformation.currencyId}
                    secondCurrencyName={currencyToInformation.currencyName}
                    amountValue={amountValue}
                    exchangeRate={exchangeRate}
                    reverseExchangeRate={reverseExchangeRate} />)
            }
        </div>
    );
};

export default Convert;