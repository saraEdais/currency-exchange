import React, { useState,useEffect } from 'react';
import classes from './container.module.css'
import Send from '../send/send.component'
import Convert from '../convert/convert.component'
import Alerts from '../alerts/alerts.component';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { DollarCircleOutlined, 
  SendOutlined, 
  LineChartOutlined, 
  AlertOutlined 
} from "@ant-design/icons"

const Container = (props) => {
  const [pathName, setPathName] = useState("/");

  const PathNameHandel=(pathName)=>{
    setPathName(pathName)
  }

  return <Router>
    <div className={classes.container}>
      <div className={classes.navBar}>
        <a href='/currency-converter/'
          name="convert"
          style={{"border-radius":" 10px 0 0 0"}}
          className={pathName === "/currency-converter/" || pathName==="/"? classes.anchorStyleSelected : classes.anchorStyle} >
          <DollarCircleOutlined />
          Convert
        </a>
        <a href='/send-money/'
          title='send'
          className={pathName === "/send-money/" ? classes.anchorStyleSelected : classes.anchorStyle}>
          <SendOutlined />
          Send
        </a>
        <a href='/currency-charts/'
          className={pathName === "/currency-charts/" ? classes.anchorStyleSelected : classes.anchorStyle}>
          <LineChartOutlined />
          Charts
        </a>
        <a href='/rate-alerts/'
        style={{"border-radius":"0 10px 0 0"}}
          className={pathName === "/rate-alerts/" ? classes.anchorStyleSelected : classes.anchorStyle}>
          <AlertOutlined />
          Alerts
        </a>
      </div>
      <div>
        <Routes>
          <Route path="/currency-converter/" element={<Convert currencyObj={props.currency} PathNameHandel={PathNameHandel}/>} />
          <Route path="/send-money/" element={<Send PathNameHandel={PathNameHandel}/>} />
          {/* <Route path="/currency-charts/" element={<Charts />} /> */}
          <Route path="/rate-alerts/" element={<Alerts PathNameHandel={PathNameHandel}/>} />
          <Route path="/" element={<Convert currencyObj={props.currency} PathNameHandel={PathNameHandel}/>} />
        </Routes>
      </div>
    </div>
  </Router>;
};

export default Container;