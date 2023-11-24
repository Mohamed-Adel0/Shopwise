import React from "react";
import Css from "./TwoHome.module.css";
import furn1 from "../Pictures/furniture_img1.jpg";
import furn2 from "../Pictures/furniture_img2.jpg";
import furn3 from "../Pictures/furniture_img3.jpg";
import furn4 from "../Pictures/furniture_img4.jpg";
import furn5 from "../Pictures/furniture_img5.jpg";
import furn6 from "../Pictures/furniture_img6.jpg";
import furn7 from "../Pictures/furniture_img7.jpg";
import furn8 from "../Pictures/furniture_img8.jpg";
import { AiTwotoneStar, AiOutlineHeart } from "react-icons/ai";
import { BsStarHalf, BsSearchHeart } from "react-icons/bs";
import { TbExchange } from "react-icons/tb";
import "animate.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CartSlice } from "../Redux/Cartslice";
const TwoHome = () => {
  const getData = [
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
  const dispatch = useDispatch();
  
  return (
    <div>
      <div className={Css.parent}>
        <div className={Css.container}>
          <div className={Css.title}>
            <h1>Exclusive Products</h1>
          </div>
          {getData.map((item) => (
            <div key={item.id} data-aos="zoom-in">
              <div className={Css.card}>
                <div className={Css.img}>
                  <img src={item.image} alt="" />
                  <div className={Css.bg}>
                    <div className={Css.icons}>
                      <button>
                        <AiOutlineHeart  onClick={()=>dispatch(CartSlice.actions.wishlist(item))}/>
                      </button>
                      <button>
                        <BsSearchHeart />
                      </button>
                      <button>
                        <TbExchange />
                      </button>
                    </div>
                  </div>
                </div>
                <div className={Css.text}>
                  <h4>{item.title.split(" ").splice(0, 2).join(" ")}</h4>

                  <div className={Css.sallery}>
                    <p>
                      <span>{item.sallery}</span>
                    </p>
                    <p>
                      <del>{item.del}</del>
                    </p>
                  </div>
                  <div className={Css.newproduct}>
                    <Link to={`${item.id}`}>Read More</Link>
                    <button onClick={() => dispatch(CartSlice.actions.addtocart(item))}>Add to Card</button>
                  </div>
                  <div className={Css.stars}>
                    <p>
                      <AiTwotoneStar />
                    </p>
                    <p>
                      <AiTwotoneStar />
                    </p>
                    <p>
                      <AiTwotoneStar />
                    </p>
                    <p>
                      <AiTwotoneStar />
                    </p>
                    <p>
                      <BsStarHalf />
                    </p>
                    <p> ${item.deraction}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TwoHome;
