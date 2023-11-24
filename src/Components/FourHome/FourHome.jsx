import React from "react";
import Css from "./FourHome.module.css";
import logo from "../Pictures/Logo.png";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
const FourHome = () => {
  return (
    <div>
      <div className={Css.parent}>
        <div className={Css.navbar}>
          <div className={Css.img}>
            <img src={logo} alt="" />
          </div>
          <ul>
            <li>
              <Link to="/">Chair</Link>
            </li>
            <li>
              <Link to="/singal">Products</Link>
            </li>
            <li>
              <Link to="">Sales</Link>
            </li>
            <li>
              <Link to="/">Our Services</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
          </ul>
        </div>
      
        <div className={Css.container}>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default FourHome;
