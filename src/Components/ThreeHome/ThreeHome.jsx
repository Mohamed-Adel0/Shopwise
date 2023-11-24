import React from "react";
import Css from "./ThreHome.module.css";
import funr1 from "../Pictures/furn1.jpg";
import funr2 from "../Pictures/furn2.jpg";
import { Link } from "react-router-dom";
const ThreeHome = () => {
  return (
    <div>
      <div className={Css.parent}>
        <div className={Css.container}>
          <div className={Css.card} data-aos="zoom-in-right">
            <img src={funr1} alt="" />
            <div className={Css.text}>
              <h5>Super Sale</h5>
              <h2>New Collection</h2>
              <Link to="">Show Now</Link>
            </div>
          </div>
          <div className={Css.card} data-aos="zoom-in-left">
            <img src={funr2} alt="" />
            <div className={Css.textx}>
              <h2>New Season</h2>
              <h5>Sale 40% Off</h5>
              <Link to="">Show Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeHome;
