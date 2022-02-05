<<<<<<< HEAD
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

=======
import React from 'react';
import Navbar from "../../components/navBar/navbar.component";
import Container from "../../components/container/container.component";
export const Home = () => {
  return (
  <div>
    <Navbar />
    <Container/>
  </div>
  );
};
>>>>>>> a28468c31a99eb21e8d760470c48b88c0c76da0b
export default Home;
