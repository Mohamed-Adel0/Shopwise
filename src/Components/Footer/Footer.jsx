import React from "react";
import Css from "./Footer.module.css";
import { ImLocation } from "react-icons/im";
import { CgMail } from "react-icons/cg";
import { IoIosCall } from "react-icons/io";
import { BiLogoFacebook } from "react-icons/bi";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import banner1 from "../Pictures/furniture_insta3.jpg";
import banner2 from "../Pictures/furniture_insta4.jpg";
import banner3 from "../Pictures/furniture_insta5.jpg";
import banner4 from "../Pictures/furniture_insta6.jpg";
import banner5 from "../Pictures/furniture_insta5.jpg";
import banner6 from "../Pictures/furniture_insta2.jpg";
import banner7 from "../Pictures/furniture_insta1.jpg";
import banner8 from "../Pictures/furn2.jpg";
import banner9 from "../Pictures/furn1.jpg";
import banner10 from "../Pictures/furniture_img6.jpg";
import banner11 from "../Pictures/furniture_img2.jpg";
import banner12 from "../Pictures/furniture_img5.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  const img = [
    {
      id: 1,
      image: banner1,
    },
    {
      id: 2,
      image: banner2,
    },
    {
      id: 3,
      image: banner3,
    },
    {
      id: 4,
      image: banner4,
    },
    {
      id: 5,
      image: banner5,
    },
    {
      id: 6,
      image: banner6,
    },
    {
      id: 7,
      image: banner7,
    },
    {
      id: 8,
      image: banner8,
    },
    {
      id: 9,
      image: banner9,
    },
    {
      id: 10,
      image: banner10,
    },
    {
      id: 11,
      image: banner11,
    },
    {
      id: 12,
      image: banner12,
    },
  ];
  return (
    <div>
      <div className={Css.parent}>
        <div className={Css.container}>
          <div className={Css.cards} data-aos="fade-right">
            <div className={Css.card}>
              <h4>CONTACT US</h4>
              <p>
                <ImLocation /> 8th floor, 379 Hudson St, New York, NY 10018
              </p>
              <p>
                <IoIosCall /> (+20) 01117189056
              </p>
              <p>
                <CgMail /> howare7amo99@gmail.com
              </p>
            </div>
            <div className={Css.card}>
              <h4>OPENING TIMES</h4>
              <p>09:30 AM - 11:00 PM</p>
              <p>Every Day</p>
            </div>
          </div>
          <div
            className={Css.cards}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <div className={Css.card}>
              <h4>Subscribe Our Newsletter</h4>
              <p>I can work on other projects, as I am working on that</p>
              <p> with passion. If you want to work on a project, please </p>
              <p>contact me</p>
            </div>
            <div className={Css.card}></div>
          </div>
          <div className={Css.cards} data-aos="fade-left">
            <div className={Css.cardx}>
              <h4>GALLERY</h4>
            </div>
            <div className={Css.cardx}>
              {img?.map((item) => (
                <div className={Css.img} key={item.id}>
                  <img src={item.image} alt="" />
                  <div className={Css.bg}></div>
                </div>
              ))}
            </div>
            <div className={Css.cardx}></div>
          </div>
        </div>
        <footer>
          <div className={Css.containerfooter}>
            <div className={Css.icons}>
              <Link to="https://www.facebook.com/profile.php?id=100012706116123">
                <BiLogoFacebook />
              </Link>
              <Link to="https://www.linkedin.com/in/mohamed-adel-226611286/">
                <AiFillLinkedin />{" "}
              </Link>
              <Link to="https://github.com/Mohamed-Adel97">
                <AiFillGithub />{" "}
              </Link>
            </div>
            <div className={Css.icons}>
              <h4>
                Copyright ©2023 All rights reserved | This template is made with
                by <span>Mohamed-adel</span>
              </h4>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
