import React from "react";
import furn1 from "../Pictures/furniture_img1.jpg";
import furn2 from "../Pictures/furniture_img2.jpg";
import furn3 from "../Pictures/furniture_img3.jpg";
import furn4 from "../Pictures/furniture_img4.jpg";
import furn5 from "../Pictures/furniture_img5.jpg";
import furn6 from "../Pictures/furniture_img6.jpg";
import furn7 from "../Pictures/furniture_img7.jpg";
import furn8 from "../Pictures/furniture_img8.jpg";
import Css from "./RebackData.module.css";
import { Link, useParams } from "react-router-dom";
const RebackData = () => {
  const dataApi = [
    {
      id: 1,
      image: furn1,
      title: "Enim Expedita Sed",
      sallery: "$45.00",
      del: "$55.25",
      deraction: "(21)",
    },
    {
      id: 2,
      image: furn2,
      title: "Adipisci Officia Libero",
      sallery: "$55.00",
      del: "$95.25",
      deraction: "(15)",
    },
    {
      id: 3,
      image: furn3,
      title: "Internet Tend To Repeat",
      sallery: "$68.00",
      del: "$99.25",
      deraction: "(25)",
    },
    {
      id: 4,
      image: furn4,
      title: "Many Desktop Publishing",
      sallery: "$69.00",
      del: "$89.25",
      deraction: "(22)",
    },
    {
      id: 5,
      image: furn5,
      title: "Injected Humour Repetition",
      sallery: "$45.00",
      del: "$55.25",
      deraction: "(21)",
    },
    {
      id: 6,
      image: furn6,
      title: "Randomised Humour Words",
      sallery: "$55.00",
      del: "$95.25",
      deraction: "(15)",
    },
    {
      id: 7,
      image: furn7,
      title: "Expedita Distinctio Rerum",
      sallery: "$68.00",
      del: "$99.25",
      deraction: "(25)",
    },
    {
      id: 8,
      image: furn8,
      title: "Itaque Earum Rerum",
      sallery: "$69.00",
      del: "$89.25",
      deraction: "(22)",
    },
  ];
  const number = useParams();
  const useid = number.id;
  const product = dataApi.filter((item) => item.id == useid);

  return (
    <div>
      {product.map((item) => (
        <div className={Css.parent} key={item.id}>
          <div className={Css.container}>
            <div className={Css.card}>
              <h1>{item.title}</h1>
              <div className={Css.sallery}>
                <p>{item.sallery}</p>
                <p style={{ color: "#242424" }}>
                  Sale %30 <del>{item.del}</del>
                </p>
              </div>
              <Link to="/">Buy Now</Link>
            </div>
            <div className={Css.card}>
              <img src={item.image} alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RebackData;
