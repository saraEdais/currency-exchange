import React, { useState, useEffect } from 'react';
import classes from "./alerts.module.css";
import alertImage from '../../assets/images/alert.PNG'
import Button from '../button/button.component';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';

const Alerts = (props) => {

    let location = useLocation();
    const [email, setEmail] = useState("");
    const [isEntered, setIsEntered] = useState(false);

    useEffect(() => {
        props.PathNameHandel(location.pathname)
    }, []);

    const notifyHandler = () => {
        if (email.length === 0) {
            setIsEntered(true)
            console.log(isEntered)
        }
        else {
            setIsEntered(false)
            toast.success('successful subscribe', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored'
            })
        }
        setEmail("")
    }

    return <div className={classes.alertsComponent}>
        <div className={classes.subscribePart}>
            <ToastContainer />
            <div>
                <label>Email</label>
                <input
                    className={isEntered ? classes.alertInputEnter : classes.alertInput}
                    type="text"
                    placeholder='enter your email'
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }} />
                {
                    (isEntered && <div style={{ color: "red", fontSize: "10px", marginBottom: "40px" }}>you should enter your email</div>)
                }
            </div>
            <Button buttonName={"subscribe"} onClickHandler={notifyHandler} />
        </div>
        <div>
            <img className={classes.alertImg} src={alertImage} />
        </div>
    </div>;
};

export default Alerts;
