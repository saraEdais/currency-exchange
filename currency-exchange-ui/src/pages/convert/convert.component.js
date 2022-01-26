import classes from './convert.module.css';
import React, { useEffect, useState } from 'react';
import DropDownList from '../../components/drop-down-list/drop-down-list.component';
import Switcher from '../../components/switcher/switcher.component';
import AmountInput from '../../components/amount-input/amount.component';
import ButtonComp from '../../components/button/button.component';


const Convert = () => {
    const buttonName = "convert";

    const [currency, setCurrency] = useState({});
    useEffect(() => {
        fetch('https://free.currconv.com/api/v7/countries?apiKey=bf19efdeacde3c60c111')
        .then(async (res) => {
            const result = await res.json();
            console.log(result.results);
            setCurrency(result.results);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);
    return (
        <div>
            convert
            <DropDownList list={currency}/>
            <Switcher />
            <DropDownList list={currency}/>
            <AmountInput />
            <ButtonComp buttonName={buttonName}/>
        </div>
    );
};

export default Convert;
