import React from "react";
import coverPhoto from "../../assests/images/cover.png";
import logo from "../../assests/images/icon.png";
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

export const Navbar = () => {
  return (
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
      <Quote />
    </div>
  );
};
export default Navbar;
