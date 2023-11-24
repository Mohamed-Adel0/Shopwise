import React, { useEffect, useState } from "react";
import Css from "./LoginUp.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { CartSlice } from "../../Redux/Cartslice";
const LoginUp = () => {
  const [setUser, getUser] = useState();
  const [setEmail, getEmail] = useState();
  const [setPassowrd, getPassowrd] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/users")
      .then((r) => getUser(r.data))
      .catch((error) => console.log(error));
  }, []);

  const valdationData = () => {
    const user = setUser?.filter((e) => {
      if (e.email == setEmail) {
        console.log("welcome");
      } else {
        console.log("not aquel");
      }
    });
    console.log(user);
  };

  return (
    <div>
      <div className={Css.parent}>
        {/* {setUser?.map((e) => (
          <div>
            <p>{e.email}</p>
            <p>{e.password}</p>
          </div>
        ))} */}
        <div className={Css.container}>
          <div className={Css.form} data-aos="flip-left">
            <h3>Login</h3>
            <input
              type="email"
              placeholder="addres your email"
              onChange={(e) => getEmail(e.target.value)}
            />
            <p className="wrong"></p>
            <input
              type="password"
              placeholder="Passowrd"
              onChange={(e) => getPassowrd(e.target.value)}
            />
            <p className="wrong"></p>
            <div className={Css.buttom}>
              <button onClick={() => dispatch(CartSlice.actions.login(valdationData()))}>Sgin Up</button>
              <Link to="/">Forget your Passowrd?!</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginUp;
