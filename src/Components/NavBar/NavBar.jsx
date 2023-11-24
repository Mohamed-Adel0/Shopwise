import React, { useState } from "react";
import Css from "./NavBar.module.css";
import { Link, NavLink } from "react-router-dom";
import { BsPhone, BsHeart, BsSearch, BsCart } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../Pictures/Logo.png";
import { FaArrowUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import "./Navbar.css";


const NavBar = () => {
  const [open, close] = useState(false);
  const [Start, End] = useState(false);
  const [search, setSearch] = useState(false);
  const scroll = {
    top: "0",
    scrollBehavior: "smooth",
    transition: "revert-layer",
  };
  const btnTop = () => {
    if (window.scrollY >= 780) {
      End(true);
    } else {
      End(false);
    }
  };
  window.addEventListener("scroll", btnTop);
  const ScrollHeader = () => {
    if (window.scrollY >= 1000) {
      // console.log("welcome");
      close(true);
    } else {
      close(false);
    }
  };
  window.addEventListener("scroll", ScrollHeader);
  const products = useSelector((state) => state?.cart?.items);
  const numb = products.length;
 
  return (
    <div>
      <header>
        <div className={Css.parent} data-aos="fade-right">
          <div className={Css.container}>
            <div className={Css.card}>
              <select name="" id="">
                <option value="">English</option>
                <option value="">France</option>
                <option value="">Unitde States</option>
              </select>
              <select name="" id="">
                <option value="">USD</option>
                <option value="">EUR</option>
                <option value="">GBR</option>
              </select>
              <Link to="">
                <BsPhone /> 01117189056
              </Link>
            </div>
            <div className={Css.card}>
              <Link to="">
                <MdOutlineCompareArrows /> Compare
              </Link>
              
                <Link to="Wishlist">
                  <BsHeart /> Wishlist
                </Link>
                
              <Link to="login">
                <FaUserAlt /> Login
              </Link>
            </div>
          </div>
        </div>

        {/* New Line to 2nd NavBar */}
        <div className={Css.nav && open ? Css.active : Css.none}>
          <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container className={Css.containerNav}>
              <Navbar.Brand to="#home">
                <img src={logo} alt="" />
              </Navbar.Brand>
              <div className={Css.icons}>
                <Link onClick={() => setSearch(true)} to="">
                  <BsSearch />
                </Link>
                <div className={Css.cart}>
                  <Link to="cart">
                    <BsCart />
                  </Link>
                  <div className={Css.numb}>
                    <p>{numb}</p>
                  </div>
                </div>
              </div>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link>
                    <NavLink to="">Home</NavLink>
                  </Nav.Link>
                  <NavDropdown title="Products" id="collapsible-nav-dropdown">
                    <NavDropdown.Item to="products">
                      <NavLink to="products">Products</NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item to="">
                      <NavLink to="register">Register</NavLink>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavLink to="register">Register</NavLink>
                  <Nav.Link>
                    <NavLink to="contact">CONTACT US</NavLink>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
              <div className={Css.icons}>
                <Link onClick={() => setSearch(true)} to="">
                  <BsSearch />
                </Link>
                <div className={Css.cart}>
                  <Link to="cart">
                    <BsCart />
                  </Link>
                  <div className={Css.numb}>
                    <p>{numb}</p>
                  </div>
                </div>
              </div>
            </Container>
          </Navbar>
        </div>
      </header>
      <div className={Start ? Css.top : Css.hide}>
        <button onClick={() => window.scrollTo(scroll)}>
          <FaArrowUp />
        </button>
      </div>
      <div className={search ? Css.right : Css.search}>
        <div className={Css.x}>
          <h1 onClick={() => setSearch(false)}>x</h1>
        </div>
        <div className={Css.childern}>
          <input type="search" placeholder="Search" />
          <button>
            <BsSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
