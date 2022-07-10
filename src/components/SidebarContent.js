import React from "react";
import Accesories from "./Sidebar/Accesories";
import AppleCorner from "./Sidebar/AppleCorner";
import AppleWatch from "./Sidebar/AppleWatch";
import Audio from "./Sidebar/Audio";
import BuyingGuides from "./Sidebar/BuyingGuides";
import Camera from "./Sidebar/Camera";
import CellPhones from "./Sidebar/CellPhones";
import Certified from "./Sidebar/Certified";
import Console from "./Sidebar/Console";
import GoodDeals from "./Sidebar/GoodDeals";
import HomeAppliances from "./Sidebar/HomeAppliances";
import Ipad from "./Sidebar/Ipad";
import Laptop from "./Sidebar/Laptop";
import "./sidebarcontent.css";
import { Box } from "@mui/material";
import close from "../images/close-black.png";
import Phone from "../images/iph.png";
import { Link } from "react-router-dom";

const SidebarContent = ({ show }) => {
  if (show === 1) {
    return (
      <Box>
        <Box className="sidebar-advert-flex">
          <div className="advert-sidebar-wrap">
            <h1>Smartphones</h1>
            <p style={{ opacity: ".8" }}>
              Apple, Samsung, Huawei, Xiami...nos to
              <br />
              Quitan de las manos!
            </p>
          </div>
          <div className="advert-sidebar-wrap">
            <img src={Phone} alt="" />
          </div>
          <div className="advert-sidebar-wrap">
            <button style={{ fontFamily: "Poppins" }} className="btn btn-light">
              Ver ofertas
            </button>
          </div>
        </Box>

        <Box className="mt-4 iphone-grid-sidebar">
          <Box>
            <h6>iPhone</h6>
            <Link to="/">Ver mas</Link>
          </Box>
          <Box className="advert-phone-grid">
            <Link to="/">Todos ios iPhone</Link>
            <Link to="/">iPhone 13</Link>
            <Link to="/">iPhone 12</Link>
            <Link to="/">iPhone 12 Mini</Link>
            <Link to="/">iPhone 12 Pro</Link>
            <Link to="/">iPhone 12 Pro Max</Link>
            <Link to="/">iPhone SE (2020)</Link>
            <Link to="/">iPhone 11</Link>
            <Link to="/">iPhone 11 Pro</Link>
            <Link to="/">iPhone 11 Pro Max</Link>
            <Link to="/">iPhone XR</Link>
            <Link to="/">iPhone XS</Link>
            <Link to="/">iPhone XS Max</Link>
            <Link to="/">iPhone X</Link>
            <Link to="/">iPhone 8</Link>
            <Link to="/">iPhone 8 Plus</Link>
            <Link to="/">iPhone 7</Link>
            <Link to="/">iPhone 7 Plus</Link>
            <Link to="/">iPhone SE</Link>
            <Link to="/">iPhone 6S</Link>
            <Link to="/">iPhone 6S Plus</Link>
            <Link to="/">iPhone vintage</Link>
            <Link to="/">iPhone menos de 200&euro;</Link>
            <Link to="/">Comparador iPhone</Link>
            <Link to="/">iPhone fundas</Link>
          </Box>
        </Box>
      </Box>
    );
  }

  if (show === 2) {
    return (
      <Box>
        <Box className="sidebar-advert-flex mackbook">
          <div className="advert-sidebar-wrap">
            <h1>MacBook</h1>
            <p style={{ opacity: ".8" }}>
              Look smarter while you 
              <br />
              sip that mochaccino. Or actually work
            </p>
          </div>
          <div className="advert-sidebar-wrap">
            <img
              src="https://mockups-design.com/wp-content/uploads/2020/06/Free_MacBook_Pro_2.jpg"
              alt=""
            />
          </div>
          <div className="advert-sidebar-wrap">
            <button style={{ fontFamily: "Poppins" }} className="btn btn-light">
              Ver ofertas
            </button>
          </div>
        </Box>

        <Box className="mt-4 iphone-grid-sidebar">
          <Box>
            <h6>All MacBook</h6>
            <Link to="/">Ver mas</Link>
          </Box>
          <Box className="advert-phone-grid">
            <Link to="/">Todos ios MackBook</Link>
            <Link to="/">MackBook M1</Link>
            <Link to="/">MackBook Retina</Link>
            <Link to="/">MacBook Pro M1</Link>
            <Link to="/">MacBook Pro 2020</Link>
            <Link to="/">MacBook Pro 2019</Link>
            <Link to="/">MacBook Pro 2018</Link>
            <Link to="/">MacBook Pro 2017</Link>
            <Link to="/">MacBook Pro 2016</Link>
            <Link to="/">MacBook Pro 2015</Link>
          </Box>
        </Box>
      </Box>
    );
  }
  if (show === 3) {
    return (
      <Box>
        <toggleClose />
      </Box>
    );
  }
};

export default SidebarContent;
