import React from "react";
import coverPhoto from "../../assets/images/cover.png";
import logo from "../../assets/images/icon.png";
import classes from "./navBar.module.css";
import {
  faDollarSign,
  faLocationArrow,
  faCopy,
  faBriefcase,
  faPlane,
  faProjectDiagram,
  faWallet,
  faObjectUngroup,
  faUsers,
  faBell,
  faChartLine,
  faGlobeAsia,
  faPlus,
  faTh,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLightbulb,
  faQuestionCircle,
} from "@fortawesome/free-regular-svg-icons";
import Quote from "../quote/quote.component";
import DropDownContentItem from "../dropDownContentItem/dropDownContentItem.component";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export const Navbar = () => {
  return (
    <Router>
      <div className={classes.wrapper}>
        <img className={classes.coverPhoto} src={coverPhoto} alt="cover" />
        <div className={classes.navbar}>
          <img className={classes.logo} src={logo} alt="logo" />
          <div className={classes.navBarItem}>
            <div className={classes.dropdown}>
              <button className={classes.dropbtn}>Coverter</button>
            </div>
            <div className={classes.dropdown}>
              <button className={classes.dropbtn}>Send money</button>
              <div className={classes.dropdownContent}>
                <DropDownContentItem feature="Send Money" icon={faDollarSign} />
                <DropDownContentItem feature="Sign up" icon={faLocationArrow} />
                <DropDownContentItem feature="Compare rates" icon={faCopy} />
              </div>
            </div>

            <div className={classes.dropdown}>
              <button className={classes.dropbtn}>Business & API</button>
              <div className={classes.dropdownContent}>
                <DropDownContentItem
                  feature="Business money transfer"
                  icon={faBriefcase}
                />
                <DropDownContentItem
                  feature="Create business account"
                  icon={faPlane}
                />
                <DropDownContentItem
                  feature="Xe currency date API"
                  icon={faProjectDiagram}
                />
                <DropDownContentItem feature="Mass payment" icon={faWallet} />
                <DropDownContentItem
                  feature="Products & Services"
                  icon={faObjectUngroup}
                />
                <DropDownContentItem feature="Partnerships" icon={faUsers} />
              </div>
            </div>
            <div className={classes.dropdown}>
              <button className={classes.dropbtn}>Tools</button>
              <div className={classes.dropdownContent}>
                <DropDownContentItem feature="Currency Charts" icon={faChartLine} />
                <DropDownContentItem feature="Rate Alert" icon={faBell} />
                <DropDownContentItem
                  feature="Travel Expence Calculater"
                  icon={faGlobeAsia}
                />
                <DropDownContentItem feature="More" icon={faPlus} />
              </div>
            </div>
            <div className={classes.dropdown}>
              <button className={classes.dropbtn}>Resources</button>
              <div className={classes.dropdownContent}>
                <DropDownContentItem
                  feature="Help Center"
                  icon={faQuestionCircle}
                />
                <DropDownContentItem feature="Blog" icon={faTh} />
                <DropDownContentItem
                  feature="Money Transfer Tips"
                  icon={faLightbulb}
                />
              </div>
            </div>
          </div>
          <div>
            <button className={classes.dropbtn}>Sign in</button>
            <button className={classes.getButton}>Get the App</button>
          </div>
        </div>
        <Routes>
          <Route path="/currency-converter/" element={<Quote title={"Xe Currency Converter"} subTitle={"Check live foreign currency exchange rates"} />} />
          <Route path="/send-money/" element={<Quote title={"International Money Transfer"} subTitle={"Send money globally with Xe, the world's trusted currency authority"} />} />
          <Route path="/currency-charts/" element={<Quote title={"Xe Currency Charts"} subTitle={"Review historical currency rates"} />} />
          <Route path="/rate-alerts/" element={<Quote title={"Currency Exchange Rate Alerts"} subTitle={"Sign-in (or sign-up!) now to get free exchange rate alerts from Xe"} />} />
          <Route path="/" element={<Quote title={"The World's Trusted Currency Authority"} subTitle={"Check exchange rates, send money internationally, and free currency tools"} />} />
        </Routes>
      </div>
    </Router>
  );
};
export default Navbar;
