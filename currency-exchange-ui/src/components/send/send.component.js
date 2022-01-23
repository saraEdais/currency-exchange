import React from 'react';
import classes from "./send.module.css";
import {CheckCircleOutlined, BankOutlined} from "@ant-design/icons"
import SendForm from '../sendForm/sendForm.component';

const Send = () => {

  return <div className={classes.sendComponent}>
    <div className={classes.sendForm}>
      <SendForm/>
    </div>
    <div className={classes.description}>
      <h2>The fast & trusted way to send money</h2>
      <p>Millions of people check our rates and send money with us every day</p>
      <ul>
        <li>
          <div>
          <CheckCircleOutlined className={classes.icon}/>
          See our low fees and exchange rates in real-time
          </div>
        </li>
        <li>
          <div>
          <CheckCircleOutlined className={classes.icon}/>
          Transparent delivery times so you can move money fast
          </div>
        </li>
        <li>
          <div>
          <CheckCircleOutlined className={classes.icon}/>
          Sign up for a free personal or business account in minutes
          </div>
        </li>
      </ul>
      <div className={classes.bankIconDiv}>
      <BankOutlined className={classes.bankIcon}/>
    </div>
    </div>
  </div>;
};

export default Send;
