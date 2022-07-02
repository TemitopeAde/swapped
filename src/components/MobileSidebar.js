import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

import trade from "../images/trade.png";
import verified from "../images/verified.png";
import quality from "../images/quality.png";

import './sidebar.css';

const MobilESidebar = ({sidebar}) => {
    console.log(sidebar)
  return (
    <Box className= {sidebar? "mobile-sidebar-container toggle": "mobile-sidebar-container"}>
      <Box className="mobile-sidebar">
        <ul className="mobile-first-list">
          <li>
            <Link to="/">Good deals</Link>
          </li>
          <li>
            <Link to="/">Cell Phones</Link>
          </li>
          <li>
            <Link to="/">MacBook</Link>
          </li>
          <li>
            <Link to="/">iPad & Tablets</Link>
          </li>
          <li>
            <Link to="/">Apple Watch</Link>
          </li>
          <li>
            <Link to="/">Laptop & Computers</Link>
          </li>
          <li>
            <Link to="/">Console & Gaming</Link>
          </li>
          <li>
            <Link to="/">Audio</Link>
          </li>
          <li>
            <Link to="/">Accessories</Link>
          </li>
          <li>
            <Link to="/">Smart Watches</Link>
          </li>
          <li>
            <Link to="/">Transportation</Link>
          </li>
          <li>
            <Link to="/">Cameras</Link>
          </li>
          <li>
            <Link to="/">TV & Home Theater</Link>
          </li>
          <li>
            <Link to="/">Apple Corner</Link>
          </li>
          <li>
            <Link to="/">Home Appliances</Link>
          </li>
          <li>
            <Link to="/">Cerified Renewed</Link>
          </li>
          <li>
            <Link to="/">Trade-in Old Tech</Link>
          </li>
          <li>
            <Link to="/">Student Discount</Link>
          </li>
          <li>
            <Link to="/">Buying Guides</Link>
          </li>
          <li>
            <Link to="/">Phone Comparison</Link>
          </li>
        </ul>

        <Box className="mobile-others">
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
        </Box>
      </Box>
    </Box>
  );
};

export default MobilESidebar;
