import React from "react";
import "./sidebarcontent.css";
import { Box } from "@mui/material";
import close from "../images/close-black.png";
import Phone from "../images/iph.png";
import { Link } from "react-router-dom";
import mac from "../images/macbook.png";
import ipad from "../images/ipad.png";
import watch from "../images/watch.png";

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
            <Link style={{ fontSize: "0.8rem", color: "gray" }} to="/">
              Ver mas
            </Link>
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
            <img src={mac} alt="" />
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
            <Link style={{ fontSize: "0.8rem", color: "gray" }} to="/">
              Ver mas
            </Link>
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
        <Box className="sidebar-advert-flex ipad">
          <div className="advert-sidebar-wrap">
            <h1>iPAD & Tablets</h1>
            <p style={{ opacity: ".8" }}>
              Side effects of the perfectly renewed tablet include decreased
              e-waste and more spending
            </p>
          </div>
          <div className="advert-sidebar-wrap">
            <img src={ipad} alt="" />
          </div>
          <div className="advert-sidebar-wrap">
            <button style={{ fontFamily: "Poppins" }} className="btn btn-light">
              Ver ofertas
            </button>
          </div>
        </Box>

        <Box className="mt-4 iphone-grid-sidebar">
          <Box>
            <h6>All iPad</h6>
            <Link style={{ fontSize: "0.8rem", color: "gray" }} to="/">
              Ver mas
            </Link>
          </Box>
          <Box className="advert-phone-grid">
            <Link to="/">iPad 7 (2019)</Link>
            <Link to="/">iPad 6 (2018)</Link>
            <Link to="/">iPad 5 (2017)</Link>
            <Link to="/">iPad accessories</Link>
            <Link to="/">iPad Pro 12.9</Link>
            <Link to="/">iPad Pro 11</Link>
            <Link to="/">iPad Pro 10.5</Link>
            <Link to="/">iPad Pro 9.7</Link>
            <Link to="/">iPad Pro 5 (2021)</Link>
          </Box>
        </Box>
      </Box>
    );
  }

  if (show === 4) {
    return (
      <Box>
        <Box className="sidebar-advert-flex">
          <div className="advert-sidebar-wrap">
            <h1>Accessories</h1>
            <p style={{ opacity: ".8" }}>Phone accessories? We got them all</p>
          </div>
          <div className="advert-sidebar-wrap">
            <img src={watch} alt="" />
          </div>
          <div className="advert-sidebar-wrap">
            <button style={{ fontFamily: "Poppins" }} className="btn btn-light">
              Ver ofertas
            </button>
          </div>
        </Box>

        <Box
          className="mt-4 iphone-grid-sidebar"
          style={{
            paddingBottom: "3rem",
            borderBottom: "1.5px solid ghostwhite",
          }}
        >
          <Box>
            <h6>Smartphone accessories</h6>
            <Link style={{ fontSize: "0.8rem", color: "gray" }} to="/">
              Ver mas
            </Link>
          </Box>
          <Box className="advert-phone-grid">
            <Link to="/">All smartphone accessories</Link>
            <Link to="/">Phone cases</Link>
            <Link to="/">Airpods</Link>
            <Link to="/">Chargers</Link>
            <Link to="/">Ear phones</Link>
            <Link to="/">Screen protectors</Link>
          </Box>
        </Box>

        <Box className="mt-4 iphone-grid-sidebar">
          <Box>
            <h6>Laptop accessories</h6>
            <Link style={{ fontSize: "0.8rem", color: "gray" }} to="/">
              Ver mas
            </Link>
          </Box>
          <Box className="advert-phone-grid">
            <Link to="/">All laptop accessories</Link>
            <Link to="/">Mice</Link>
            <Link to="/">Apple magic trackpad</Link>
            <Link to="/">Keyboards</Link>
            <Link to="/">Airpods</Link>
            <Link to="/">Computer monitors</Link>
            <Link to="/">Printer</Link>
            <Link to="/">Chargers</Link>
            <Link to="/">Screen Protectors</Link>
          </Box>
        </Box>
      </Box>
    );
  }

  if (show === 5) {
    return (
      <Box>
        <Box className="sidebar-advert-flex ipad">
          <div className="advert-sidebar-wrap">
            <h1>iPAD & Tablets</h1>
            <p style={{ opacity: ".8" }}>
              Side effects of the perfectly renewed tablet include decreased
              e-waste and more spending
            </p>
          </div>
          <div className="advert-sidebar-wrap">
            <img src={ipad} alt="" />
          </div>
          <div className="advert-sidebar-wrap">
            <button style={{ fontFamily: "Poppins" }} className="btn btn-light">
              Ver ofertas
            </button>
          </div>
        </Box>

        <Box className="mt-4 iphone-grid-sidebar">
          <Box>
            <h6>All iPad</h6>
            <Link style={{ fontSize: "0.8rem", color: "gray" }} to="/">
              Ver mas
            </Link>
          </Box>
          <Box className="advert-phone-grid">
            <Link to="/">iPad 7 (2019)</Link>
            <Link to="/">iPad 6 (2018)</Link>
            <Link to="/">iPad 5 (2017)</Link>
            <Link to="/">iPad accessories</Link>
            <Link to="/">iPad Pro 12.9</Link>
            <Link to="/">iPad Pro 11</Link>
            <Link to="/">iPad Pro 10.5</Link>
            <Link to="/">iPad Pro 9.7</Link>
            <Link to="/">iPad Pro 5 (2021)</Link>
          </Box>
        </Box>
      </Box>
    );
  }

  if (show === 6) {
    return (
      <Box>
        <Box className="sidebar-advert-flex ipad">
          <div className="advert-sidebar-wrap">
            <h1>iPAD & Tablets</h1>
            <p style={{ opacity: ".8" }}>
              Side effects of the perfectly renewed tablet include decreased
              e-waste and more spending
            </p>
          </div>
          <div className="advert-sidebar-wrap">
            <img src={ipad} alt="" />
          </div>
          <div className="advert-sidebar-wrap">
            <button style={{ fontFamily: "Poppins" }} className="btn btn-light">
              Ver ofertas
            </button>
          </div>
        </Box>

        <Box className="mt-4 iphone-grid-sidebar">
          <Box>
            <h6>All iPad</h6>
            <Link style={{ fontSize: "0.8rem", color: "gray" }} to="/">
              Ver mas
            </Link>
          </Box>
          <Box className="advert-phone-grid">
            <Link to="/">iPad 7 (2019)</Link>
            <Link to="/">iPad 6 (2018)</Link>
            <Link to="/">iPad 5 (2017)</Link>
            <Link to="/">iPad accessories</Link>
            <Link to="/">iPad Pro 12.9</Link>
            <Link to="/">iPad Pro 11</Link>
            <Link to="/">iPad Pro 10.5</Link>
            <Link to="/">iPad Pro 9.7</Link>
            <Link to="/">iPad Pro 5 (2021)</Link>
          </Box>
        </Box>
      </Box>
    );
  }

  if (show === 7) {
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
            <img src={mac} alt="" />
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
            <Link style={{ fontSize: "0.8rem", color: "gray" }} to="/">
              Ver mas
            </Link>
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

  if (show === 8) {
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
            <Link style={{ fontSize: "0.8rem", color: "gray" }} to="/">
              Ver mas
            </Link>
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

  if (show === 9) {
    return (
      <Box>
        <Box className="sidebar-advert-flex ipad">
          <div className="advert-sidebar-wrap">
            <h1>iPAD & Tablets</h1>
            <p style={{ opacity: ".8" }}>
              Side effects of the perfectly renewed tablet include decreased
              e-waste and more spending
            </p>
          </div>
          <div className="advert-sidebar-wrap">
            <img src={ipad} alt="" />
          </div>
          <div className="advert-sidebar-wrap">
            <button style={{ fontFamily: "Poppins" }} className="btn btn-light">
              Ver ofertas
            </button>
          </div>
        </Box>

        <Box className="mt-4 iphone-grid-sidebar">
          <Box>
            <h6>All iPad</h6>
            <Link style={{ fontSize: "0.8rem", color: "gray" }} to="/">
              Ver mas
            </Link>
          </Box>
          <Box className="advert-phone-grid">
            <Link to="/">iPad 7 (2019)</Link>
            <Link to="/">iPad 6 (2018)</Link>
            <Link to="/">iPad 5 (2017)</Link>
            <Link to="/">iPad accessories</Link>
            <Link to="/">iPad Pro 12.9</Link>
            <Link to="/">iPad Pro 11</Link>
            <Link to="/">iPad Pro 10.5</Link>
            <Link to="/">iPad Pro 9.7</Link>
            <Link to="/">iPad Pro 5 (2021)</Link>
          </Box>
        </Box>
      </Box>
    );
  }

  if (show === 10) {
    return (
      <Box>
        <Box className="sidebar-advert-flex">
          <div className="advert-sidebar-wrap">
            <h1>Accessories</h1>
            <p style={{ opacity: ".8" }}>Phone accessories? We got them all</p>
          </div>
          <div className="advert-sidebar-wrap">
            <img src={watch} alt="" />
          </div>
          <div className="advert-sidebar-wrap">
            <button style={{ fontFamily: "Poppins" }} className="btn btn-light">
              Ver ofertas
            </button>
          </div>
        </Box>

        <Box
          className="mt-4 iphone-grid-sidebar"
          style={{
            paddingBottom: "3rem",
            borderBottom: "1.5px solid ghostwhite",
          }}
        >
          <Box>
            <h6>Smartphone accessories</h6>
            <Link style={{ fontSize: "0.8rem", color: "gray" }} to="/">
              Ver mas
            </Link>
          </Box>
          <Box className="advert-phone-grid">
            <Link to="/">All smartphone accessories</Link>
            <Link to="/">Phone cases</Link>
            <Link to="/">Airpods</Link>
            <Link to="/">Chargers</Link>
            <Link to="/">Ear phones</Link>
            <Link to="/">Screen protectors</Link>
          </Box>
        </Box>

        <Box className="mt-4 iphone-grid-sidebar">
          <Box>
            <h6>Laptop accessories</h6>
            <Link style={{ fontSize: "0.8rem", color: "gray" }} to="/">
              Ver mas
            </Link>
          </Box>
          <Box className="advert-phone-grid">
            <Link to="/">All laptop accessories</Link>
            <Link to="/">Mice</Link>
            <Link to="/">Apple magic trackpad</Link>
            <Link to="/">Keyboards</Link>
            <Link to="/">Airpods</Link>
            <Link to="/">Computer monitors</Link>
            <Link to="/">Printer</Link>
            <Link to="/">Chargers</Link>
            <Link to="/">Screen Protectors</Link>
          </Box>
        </Box>
      </Box>
    );
  }
};

export default SidebarContent;
