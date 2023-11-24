import React from "react";
import Css from "./SimpleCard.module.css";
import { GiBus } from "react-icons/gi";
import { CiHeadphones } from "react-icons/ci";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa6";
const SimpleCard = () => {
  return (
    <div>
      <div className={Css.parent}>
        <div className={Css.container}>
          <div className={Css.card} data-aos="fade-right">
            <div className={Css.icons}>
              <p>
                <GiBus />
              </p>
            </div>
            <div className={Css.text}>
              <h5>Free Delivery</h5>
              <p>Worldwide</p>
            </div>
          </div>
          <div className={Css.card} data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0">
            <div className={Css.icons}>
              <p>
                <CiHeadphones />
              </p>
            </div>
            <div className={Css.text}>
              <h5>27/4 Online Support</h5>
              <p>Customer Support</p>
            </div>
          </div>
          <div className={Css.card} data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0">
            <div className={Css.icons}>
              <p>
                <FaHandHoldingUsd />
              </p>
            </div>
            <div className={Css.text}>
              <h5>Money Returns</h5>
              <p>30 Days money return</p>
            </div>
          </div>
          <div className={Css.card} data-aos="fade-left">
            <div className={Css.icons}>
              <p>
                <FaCcPaypal />
              </p>
            </div>
            <div className={Css.text}>
              <h5>Payment Security</h5>
              <p>Safe Payment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleCard;
