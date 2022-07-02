import { Box } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import trade from "../images/trade.png";
import verified from "../images/verified.png";
import quality from "../images/quality.png";
import SidebarContent from "./SidebarContent";

const Sidebar = () => {
  const [show, setShow] = useState(1);

  return (
    <Box className="sidebar-container">
      <Box className="sidebar">
        <ul className="first-list">
          <li>
            <Link
              onMouseLeave={() => setShow(1)}
              onMouseEnter={() => setShow(1)}
              to="/"
            >
              Good deals
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onMouseLeave={() => setShow(2)}
              onMouseEnter={() => setShow(2)}
            >
              Cell Phones
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onMouseLeave={() => setShow(3)}
              onMouseEnter={() => setShow(3)}
            >
              MacBook
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onMouseLeave={() => setShow(4)}
              onMouseEnter={() => setShow(4)}
            >
              iPad & Tablets
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onMouseLeave={() => setShow(4)}
              onMouseEnter={() => setShow(4)}
            >
              Apple Watch
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onMouseLeave={() => setShow(5)}
              onMouseEnter={() => setShow(5)}
            >
              Laptop & Computers
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onMouseLeave={() => setShow(6)}
              onMouseEnter={() => setShow(6)}
            >
              Console & Gaming
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onMouseLeave={() => setShow(7)}
              onMouseEnter={() => setShow(7)}
            >
              Audio
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onMouseLeave={() => setShow(8)}
              onMouseEnter={() => setShow(8)}
            >
              Accessories
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onMouseLeave={() => setShow(9)}
              onMouseEnter={() => setShow(9)}
            >
              Smart Watches
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onMouseLeave={() => setShow(10)}
              onMouseEnter={() => setShow(10)}
            >
              Transportation
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onMouseLeave={() => setShow(11)}
              onMouseEnter={() => setShow(11)}
            >
              Cameras
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onMouseLeave={() => setShow(12)}
              onMouseEnter={() => setShow(12)}
            >
              TV & Home Theater
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onMouseLeave={() => setShow(13)}
              onMouseEnter={() => setShow(13)}
            >
              Apple Corner
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onMouseLeave={() => setShow(14)}
              onMouseEnter={() => setShow(14)}
            >
              Home Appliances
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onMouseLeave={() => setShow(15)}
              onMouseEnter={() => setShow(15)}
            >
              Cerified Renewed
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onMouseLeave={() => setShow(15)}
              onMouseEnter={() => setShow(15)}
            >
              Trade-in Old Tech
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onMouseLeave={() => setShow(16)}
              onMouseEnter={() => setShow(16)}
            >
              Student Discount
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onMouseLeave={() => setShow(17)}
              onMouseEnter={() => setShow(17)}
            >
              Buying Guides
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onMouseLeave={() => setShow(18)}
              onMouseEnter={() => setShow(18)}
            >
              Phone Comparison
            </Link>
          </li>
        </ul>

        <Box className="others">
          <ul className="second-list">
            <li>
              <Link to="/">
                <span style={{ marginRight: "10px" }}>
                  <img style={{ width: "25px" }} src={trade} alt="" />
                </span>
                Trade-in
              </Link>
            </li>
          </ul>
          <ul className="third-list">
            <li>
              <Link to="/">
                <span style={{ marginRight: "10px" }}>
                  <img style={{ width: "25px" }} src={quality} alt="" />
                </span>
                Our quality standard
              </Link>
            </li>
          </ul>
          <ul className="fort-list">
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
      <Box className="sidebar-content">
        <SidebarContent show={show} />
      </Box>
    </Box>
  );
};

export default Sidebar;
