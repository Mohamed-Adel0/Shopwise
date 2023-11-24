import React from "react";
import Css from "./Login.module.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <div className={Css.parent}>
        <div className={Css.container}>
          <form data-aos="flip-left">
            <h3>Login</h3>
            <input type="text" placeholder="Frest Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="addres your email" />
            <input type="password" placeholder="Passowrd" />
            <input type="password" placeholder="Check Passowrd" />
            <div className={Css.buttom}>
              <button>Sgin Up</button>
              <Link to="/">Forget your Passowrd?!</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
