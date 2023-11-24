import React from "react";
import Css from "./Cart.module.css";
import { useSelector } from "react-redux";

const Cart = () => {
  const products = useSelector((state) => state?.cart?.items);
  console.log(products);
  return (
    <div>
      <div className={Css.parent}>
        <div className={Css.container}>
          {products?.map((item) => (
            <div className={Css.cards} key={item.id}>
              <div className={Css.img}>
                <img src={item.image} alt="" />
              </div>
              <div className={Css.text}>
                <h6>{item.title}</h6>
                <p>
                  <span>{item.sallery}</span>
                </p>
                <p>{item.del}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
