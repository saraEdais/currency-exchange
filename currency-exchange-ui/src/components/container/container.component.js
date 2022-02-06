import React, { useState } from 'react';
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

  return <Router>
    <div className={classes.container}>
      <div className={classes.navBar}>
        <a href='/currency-converter/'
          name="convert"
          onClick={props.selectedHandler("convert")}
          className={props.selected === "convert" ? classes.anchorStyleSelected : classes.anchorStyle} >
          <DollarCircleOutlined />
          Convert
        </a>
        <a href='/send-money/'
          title='send'
          onClick={props.selectedHandler("send")}
          className={props.selected === "send" ? classes.anchorStyleSelected : classes.anchorStyle}>
          <SendOutlined />
          Send
        </a>
        <a href='/currency-charts/'
          onClick={props.selectedHandler("charts")}
          className={props.selected === "charts" ? classes.anchorStyleSelected : classes.anchorStyle}>
          <LineChartOutlined />
          Charts
        </a>
        <a href='/rate-alerts/'
          onClick={props.selectedHandler("alerts")}
          className={props.selected === "alerts" ? classes.anchorStyleSelected : classes.anchorStyle}>
          <AlertOutlined />
          Alerts
        </a>
      </div>
      <div>
        <Routes>
          <Route path="/currency-converter/" element={<Convert />} />
          <Route path="/send-money/" element={<Send />} />
          {/* <Route path="/currency-charts/" element={<Charts />} /> */}
          <Route path="/rate-alerts/" element={<Alerts />} />
          <Route path="/" element={<Convert />} />
        </Routes>
      </div>
    </div>
  </Router>;
};

export default Container;