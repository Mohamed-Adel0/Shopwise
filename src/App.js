import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Contact from "./Components/Call Us/Contact/Contact";
import NoPage from "./Components/Call Us/NoPage/NoPage";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Login from "./Components/Call Us/Login/Login";
import RebackData from "./Components/RebackData/RebackData";
import TwoHome from "./Components/TwoHome/TwoHome";
import LoginUp from "./Components/Call Us/Register/LoginUp";
import Loading from "./Components/Call Us/Loading/Loading";
import Cart from "./Components/Call Us/Cart/Cart";
import Wishlist from "./Components/Call Us/Wishlist/Wishlist";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="App">
      <Loading />
      <NavBar />
      <Routes>
        <Route path="https://mohamed-adel0.github.io/Shopwise/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<LoginUp />} />
        <Route path=":id" element={<RebackData />} />
        <Route path="products/:id" element={<RebackData />} />
        <Route path="*" element={<NoPage />} />
        <Route path="products" element={<TwoHome />} />
        <Route path="register" element={<Login />} />
        <Route path="cart" element={<Cart/>} />
        <Route path="Wishlist" element={<Wishlist/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
