import React from "react";
import Css from "./SildeCard.module.css";
import furn1 from "../Pictures/furniture_insta1.jpg";
import furn2 from "../Pictures/furniture_insta2.jpg";
import furn3 from "../Pictures/furniture_insta3.jpg";
import furn4 from "../Pictures/furniture_insta4.jpg";
const SildeCard = () => {
  const imgs = [
    {
      id: 1,
      image: furn1,
    },
    {
      id: 2,
      image: furn2,
    },
    {
      id: 3,
      image: furn3,
    },
    {
      id: 4,
      image: furn4,
    },
  ];
  return (
    <div>
      <div className={Css.parent}>
        <h2>Trending Items</h2>
        <div className={Css.container}>
          {imgs?.map((item) => (
            <div className={Css.card} key={item.id}>
              <img src={item.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SildeCard;
