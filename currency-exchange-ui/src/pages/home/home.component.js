import React, { useState } from 'react';
import classes from './home.module.css'
import Container from '../../components/container/container.component';

const Home = () => {
  const [selected, setSelected] = useState("convert");

  const selectedHandler = (selectName) => {
    console.log(selected)
    setSelected(selectName)
  }

  return <div className={classes.homeComponent}>
    <Container
      selected={selected}
      selectedHandler={selectedHandler} />
  </div>;
};

export default Home;
