import React from "react";
import Css from "./Home.module.css";
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import banner1 from "../Pictures/banner1.jpg";
import banner2 from "../Pictures/banner2.jpg";
import banner3 from "../Pictures/banner3.jpg";
import { Link } from "react-router-dom";
import SimpleCard from "./SimpleCard/SimpleCard";
import TwoHome from "../TwoHome/TwoHome";
import ThreeHome from "../ThreeHome/ThreeHome";

const Home = () => {
  return (
    <div>
      <div className={Css.parent}>
        <div className={Css.container}>
          <Carousel fade data-bs-theme="dark">
            <Carousel.Item>
              <img
                className="d-block w-100 "
                src={banner2}
                alt="Second slide"
              />
              <div className={Css.card}>
                <h5 className="animate__animated animate__bounce animate__faster animate__bounceInDown">
                  Taking your Viewing Experience to Next Level
                </h5>
                <h1 className="animate__animated animate__slow animate__bounce animate__zoomInDown">
                  Living Room
                </h1>
                <h1 className="animate__animated animate__bounce animate__slower animate__zoomInRight">
                  Collection
                </h1>
                <Link className={Css.hover} to="">
                  SHOP NOW
                </Link>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={banner1} alt="Second slide" />
              <div className={Css.card}>
                <h5 className="animate__animated animate__bounce animate__faster animate__bounceInDown">
                  Get up to 50% off Today Only!
                </h5>
                <h1 className="animate__animated animate__slow animate__bounce animate__zoomIn">
                  Wooden Chair
                </h1>
                <h1 className="animate__animated animate__bounce animate__slower animate__zoomInRight">
                  Collection
                </h1>

                <Link className={Css.hover} to="">
                  SHOP NOW
                </Link>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 "
                src={banner3}
                alt="Second slide"
              />
              <div className={Css.card}>
                <h5 className="animate__animated animate__bounce animate__faster animate__bounceInDown">
                  NEW TRANDING
                </h5>
                <h1 className="animate__animated animate__slow animate__bounce animate__zoomInLeft">
                  Sofa Collection
                </h1>
                <p className="animate__animated animate__bounce animate__slower animate__zoomInRight">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus blandit massa enim. Nullam id varius nunc id varius
                  nunc.
                </p>
                <div className={Css.link}>
                  <Link className={Css.hover} to="">
                    SHOP NOW
                  </Link>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <SimpleCard />
      <TwoHome />
      <ThreeHome />
    </div>
  );
};

export default Home;
