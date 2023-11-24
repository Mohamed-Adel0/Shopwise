import React from "react";
import Css from "./Wishlist.module.css";
import { useDispatch, useSelector } from "react-redux";
import { CartSlice } from "../../Redux/Cartslice";
const Wishlist = () => {
  const getwishlist = useSelector((state) => state?.cart?.loves);
  const dispatch = useDispatch()
  return (
    <div>
      <div className={Css.parent}>
        <div className={Css.text}>
          <h2>WishList</h2>
        </div>
        <div className={Css.container}>
          <div className={Css.discraption}>
            <h5>Product</h5>
            <div className={Css.doubalText}>
              <h5>Price</h5>
              <h5>Stock Status</h5>
            </div>
            <h5>Remove</h5>
          </div>
          {getwishlist?.map((item) => (
            <div className={Css.card} data-aos="fade-right" key={item.id}>
              <div className={Css.img}>
                <img src={item.image} alt="" />
              </div>
              <h5 className={Css.paragraph}>Blue Dress For Woman</h5>
              <div className={Css.sale}>
                <h5>{item.sallery}</h5>
                <h5>
                  <span>in Stock</span>
                </h5>
              </div>
              <button className={Css.add} onClick={()=>dispatch(CartSlice.actions.addtocart(item))}>Add to Card</button>
              <button className={Css.x}>X</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
