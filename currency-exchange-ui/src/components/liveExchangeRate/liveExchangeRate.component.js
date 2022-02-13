import React, { useEffect, useState } from "react";
import CurrencyItem from "../currencyItem/currencyItem.component";
import classes from "./liveExchangeRate.module.css";
import moment from "moment";

const LiveExchangeRate = () => {
  let today = new Date();
  let todayDate = moment(today).format("YYYY-MM-DD");

  let yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  let yesterdayDate = moment(yesterday).format("YYYY-MM-DD");

  const [flags, setFlags] = useState([]);
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [amount, setAmount] = useState({});
  const [change, setChange] = useState({});

  useEffect(async () => {
    await fetch(
      "https://free.currconv.com/api/v7/countries?apiKey=af6f35ba919b122286d9"
    )
      .then(async (res) => {
        const result = await res.json();
        let temp = [];
        Object.keys(result.results).map((key, index) => 
          {
          if(key==="BR"||key==="IL"||key==="GB"||key==="TV"||key==="IN"){
            temp.push(result.results[key]);
          }
        }
        );
        console.log(temp);
        setFlags(temp);
      })
      .catch((error) => {
        console.log(error);
      });
    await fetch(
      `https://freecurrencyapi.net/api/v2/latest?apikey=d74943f0-8b29-11ec-9b26-cb24a38d2bff&base_currency=${baseCurrency}`
    )
      .then(async (res) => {
        const result = await res.json();
        setAmount(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
    await fetch(
      `https://freecurrencyapi.net/api/v2/historical?apikey=d74943f0-8b29-11ec-9b26-cb24a38d2bff&base_currency=${baseCurrency}&date_from=${yesterdayDate}&date_to=${todayDate}`
    )
      .then(async (res) => {
        const result = await res.json();
        setChange(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className={classes.rateContainer}>
      <h1>Xe Live Exchange Rate</h1>
      <table>
        <thead>
          <tr className={classes.currencyAttribute}>
            <th>Inverse</th>
            <th>Amount</th>
            <th>Change(24h)</th>
            <th>Chart(24h)</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          <CurrencyItem
            list={flags}
            amount={amount}
            endRate={change[todayDate]}
            startRate={change[yesterdayDate]}
            today={todayDate}
            yesterday={yesterdayDate}
          />
        </tbody>
      </table>
    </div>
  );
};

export default LiveExchangeRate;
