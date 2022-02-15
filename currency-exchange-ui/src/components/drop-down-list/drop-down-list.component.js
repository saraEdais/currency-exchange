import classes from './drop-down-list.module.css'
import React, { useState, useEffect } from 'react'

const DropDownList = (props) => {
    const [flagId, setFlagId] = useState("");
    const [currencyName, setCurrencyName] = useState("");
    const [currencyId, setCurrencyId] = useState("");
    const [currencySymbol, setCurrencySymbol] = useState("");

    const currencyInformation = () => {
        if (props.style === "1") {
            props.currencyFromInformation({
                flagId: flagId,
                currencyName: currencyName,
                currencyId: currencyId,
                currencySymbol: currencySymbol
            }
            )
            props.dropDownFromHandel()
        }
        else {
            props.currencyToInformation({
                flagId: flagId,
                currencyName: currencyName,
                currencyId: currencyId,
                currencySymbol: currencySymbol
            }
            )
            props.dropDownToHandel()
        }
    }
    useEffect(() => {
        currencyInformation()
    }, [currencyName, currencyId, flagId]);


    return (

        <div className={props.style === "1" ? classes.dropDownListDiv1 : classes.dropDownListDiv2}>
            {
                Object.keys(props.list).filter((key, index) => {

                    if ((props.list[key].currencyName).toLowerCase().includes(props.searchForCurrency.toLowerCase()) || (props.list[key].currencyId).toLowerCase().includes(props.searchForCurrency.toLowerCase())) {
                        return (<div value={props.list[key].currencyId}
                            key={index}
                            style={{ display: "flex" }}
                            className={classes.currencyPart}
                            onClick={() => {
                                setCurrencyId(props.list[key].currencyId)
                                setCurrencyName(props.list[key].currencyName)
                                setFlagId(props.list[key].id)
                                setCurrencySymbol(props.list[key].currencySymbol)
                            }}
                        >
                            <img className={classes.flagsStyle} src={`https://flagcdn.com/${(props.list[key].id).toLowerCase()}.svg`} />
                            <div className={classes.currencyName}>
                                <span>{props.list[key].currencyId}-</span>
                                <p>{props.list[key].currencyName}</p>
                            </div>
                        </div>)
                    }
                }).map((key, index) => (
                    <div value={props.list[key].currencyId}
                        key={index}
                        style={{ display: "flex" }}
                        className={classes.currencyPart}
                        onClick={() => {
                            setCurrencyId(props.list[key].currencyId)
                            setCurrencyName(props.list[key].currencyName)
                            setFlagId(props.list[key].id)
                            setCurrencySymbol(props.list[key].currencySymbol)
                        }}
                    >
                        <img className={classes.flagsStyle} src={`https://flagcdn.com/${(props.list[key].id).toLowerCase()}.svg`} />
                        <div className={classes.currencyName}>
                            <span>{props.list[key].currencyId}-</span>
                            <p>{props.list[key].currencyName}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default DropDownList;
