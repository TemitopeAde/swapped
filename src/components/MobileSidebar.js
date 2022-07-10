import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

import trade from "../images/trade.png";
import verified from "../images/verified.png";
import quality from "../images/quality.png";

import "./sidebar.css";

const MobilESidebar = ({ sidebar }) => {
  console.log(sidebar);
  return (
    <Box
      className={
        sidebar ? "mobile-sidebar-container toggle" : "mobile-sidebar-container"
      }
    >
      <Box className="mobile-sidebar">
        <ul className="mobile-first-list">
          <li>
            <Link to="/">Top OFertas</Link>
          </li>
          <li>
            <Link to="/">Smartphones</Link>
          </li>
          <li>
            <Link to="/">MacBook</Link>
          </li>
          <li>
            <Link to="/">iPad & Tablets</Link>
          </li>
          <li>
            <Link to="/">Informatica y Accesories</Link>
          </li>
          <li>
            <Link to="/">Coleccion Apple</Link>
          </li>
          <li>
            <Link to="/">Cascos, Altavoces y Audio</Link>
          </li>
          <li>
            <Link to="/">Apple watch</Link>
          </li>
          <li>
            <Link to="/">Accessorios</Link>
          </li>
          <li>
            <Link to="/">Televisores y Sonido</Link>
          </li>
          <li>
            <Link to="/">Tienda oficial</Link>
          </li>
        </ul>

        {/* <Box className="mobile-others">
          <ul className="mobile-second-list">
            <li>
              <Link to="/">
                <span style={{ marginRight: "10px" }}>
                  <img style={{ width: "25px" }} src={trade} alt="" />
                </span>
                Trade-in
              </Link>
            </li>
          </ul>
          <ul className="mobile-third-list">
            <li>
              <Link to="/">
                <span style={{ marginRight: "10px" }}>
                  <img style={{ width: "25px" }} src={quality} alt="" />
                </span>
                Our quality standard
              </Link>
            </li>
          </ul>
          <ul className="mobile-fort-list">
            <li>
              <Link to="/">
                <span style={{ marginRight: "10px" }}>
                  <img style={{ width: "25px" }} src={verified} alt="" />
                </span>
                Verified customers ratings
              </Link>
            </li>
          </ul>
        </Box> */}
      </Box>
    </Box>
  );
};

export default MobilESidebar;
