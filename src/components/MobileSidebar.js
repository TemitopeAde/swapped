import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

import trade from "../images/trade.png";
import verified from "../images/verified.png";
import quality from "../images/quality.png";

import "./sidebar.css";

const MobilESidebar = ({ sidebar }) => {
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
            <Link to="/smart-phones">Smartphones</Link>
          </li>
          <li>
            <Link to="/macbook">MacBook</Link>
          </li>
          <li>
            <Link to="/ipad-and-tablets">iPad & Tablets</Link>
          </li>
          <li>
            <Link to="/formatica-y-accesories">Informatica y Accesories</Link>
          </li>
          <li>
            <Link to="/collections">Coleccion Apple</Link>
          </li>
          <li>
            <Link to="/audio">Cascos, Altavoces y Audio</Link>
          </li>
          <li>
            <Link to="/apple-watch">Apple watch</Link>
          </li>
          <li>
            <Link to="/accessories">Accessorios</Link>
          </li>
          <li>
            <Link to="/televisores">Televisores y Sonido</Link>
          </li>
          <li>
            <Link to="/tienda">Tienda oficial</Link>
          </li>
        </ul>

        <Box className="mobile-others">
          <ul className="mobile-second-list">
            <li>
              <Link to="/top-offers">
                <span style={{ marginRight: "10px" }}>
                  <img style={{ width: "25px" }} src={verified} alt="" />
                </span>
                Top OFERTAS
              </Link>
            </li>
          </ul>
          <ul className="mobile-third-list">
            <li>
              <Link to="/smartphones">
                <span style={{ marginRight: "10px" }}>
                  <img style={{ width: "25px" }} src={verified} alt="" />
                </span>
                Smartphones Nuevos
              </Link>
            </li>
          </ul>
          <ul className="mobile-fort-list">
            <li>
              <Link to="/">
                <span style={{ marginRight: "10px" }}>
                  <img style={{ width: "25px" }} src={verified} alt="" />
                </span>
                Nuestros Recondicionados
              </Link>
            </li>
          </ul>
          <ul className="mobile-fort-list">
            <li>
              <Link to="/repuestos">
                <span style={{ marginRight: "10px" }}>
                  <img style={{ width: "25px" }} src={verified} alt="" />
                </span>
                Repuesto
              </Link>
            </li>
          </ul>
          <ul className="mobile-fort-list">
            <li>
              <Link to="/">
                <span style={{ marginRight: "10px" }}>
                  <img style={{ width: "25px" }} src={verified} alt="" />
                </span>
                Fundas y Protectores
              </Link>
            </li>
          </ul>
          <ul className="mobile-fort-list">
            <li>
              <Link to="/">
                <span style={{ marginRight: "10px" }}>
                  <img style={{ width: "25px" }} src={verified} alt="" />
                </span>
                Accesorios
              </Link>
            </li>
          </ul>
          <ul className="mobile-fort-list">
            <li>
              <Link to="/">
                <span style={{ marginRight: "10px" }}>
                  <img style={{ width: "25px" }} src={verified} alt="" />
                </span>
                Informatica y Ocio
              </Link>
            </li>
          </ul>
          <ul className="mobile-fort-list">
            <li>
              <Link to="/">
                <span style={{ marginRight: "10px" }}>
                  <img style={{ width: "25px" }} src={verified} alt="" />
                </span>
                Material para Tiendas
              </Link>
            </li>
          </ul>
          <ul className="mobile-fort-list">
            <li>
              <Link to="/blog">
                <span style={{ marginRight: "10px" }}>
                  <img style={{ width: "25px" }} src={verified} alt="" />
                </span>
                Blogs
              </Link>
            </li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default MobilESidebar;
