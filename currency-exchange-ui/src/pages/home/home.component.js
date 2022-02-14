import React, { useState, useEffect } from 'react';
import classes from './home.module.css'
import Container from '../../components/container/container.component';
import Navbar from "../../components/navBar/navbar.component";

const Home = () => {
  const [currency, setCurrency] = useState({});

  useEffect(async () => {
    await fetch('https://free.currconv.com/api/v7/countries?apiKey=bf19efdeacde3c60c111')
      .then(async (res) => {
        const result = await res.json();
        setCurrency( result.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div className={classes.homeComponent}>
    <Navbar />
    <Container
      currency={currency}
    />
  </div>;
};

export default Home;
