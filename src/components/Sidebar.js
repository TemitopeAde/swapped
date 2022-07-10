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
            <Link onClick={() => setShow(1)} to="/">
              Top OFertas
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => setShow(2)}>
              Smartphones
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => setShow(3)}>
              MacBook
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => setShow(4)}>
              iPad & Tablets
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => setShow(4)}>
              Informatica y Accesories
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => setShow(5)}>
              Coleccion Apple
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => setShow(6)}>
              Cascos, Altavoces y Audio
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => setShow(7)}>
              Apple watch
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => setShow(8)}>
              Accessorios
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => setShow(9)}>
              Televisores y Sonido
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => setShow(10)} o>
              Tienda oficial
            </Link>
          </li>
        </ul>

        {/* <Box className="others">
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
        </Box> */}
      </Box>
      <Box className="sidebar-content">
        <SidebarContent show={show} />
      </Box>
    </Box>
  );
};

export default Sidebar;
