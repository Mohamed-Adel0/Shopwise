import React from "react";
import Css from "./Contact.module.css";
import mine from "../picture/Mine.jpg";
import { BsTelephone } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
const Contact = () => {
  return (
    <div>
      <div className={Css.parent}>
        <div className={Css.container}>
          <div className={Css.card}>
            <div className={Css.img}>
              <img src={mine} alt="" />
            </div>
            <div className={Css.info}>
              <h6>Email Address</h6>
              <p>
                <CgMail /> howare7amo99@gmail.com
              </p>
              <br />
              <h6>Phone</h6>
              <p>
                {" "}
                <BsTelephone /> 01117189056
              </p>
              <br />
              <h6>OPENING TIMES</h6>
              <p>09:30 AM - 11:00 PM</p>
              <p>Every Day</p>
            </div>
          </div>
          {/* New Card */}
          <div
            className={Css.card}
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="300"
            data-aos-duration="1000"
          >
            <div className={Css.text}>
              <h4>Get In Touch</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus blandit massa enim. Nullam id varius nunc id varius
                nunc.
              </p>
            </div>
            <form action="">
              <div className={Css.input}>
                <input type="text" name="" id="" placeholder="Enter Name *" />
                <input type="email" name="" id="" placeholder="Enter Email *" />
              </div>
              <div className={Css.input}>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Phone No. *"
                />
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter Subject *"
                />
              </div>
              <div className={Css.msg}>
                <textarea
                  name=""
                  id=""
                  cols="104"
                  rows="8"
                  placeholder="Message *"
                ></textarea>
              </div>
              <button>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
