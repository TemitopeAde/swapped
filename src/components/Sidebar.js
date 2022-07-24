import { Box } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import SidebarContent from "./SidebarContent";

const Sidebar = () => {
  const [show, setShow] = useState(1);

  return (
    <Box className="sidebar-container">
      <Box className="sidebar">
        <ul className="first-list">
          {/* <li>
            <Link onClick={() => setShow(1)} to="/">
              Top OFertas
            </Link>
          </li> */}
          <li>
            <Link
              className={show === 1 ? "color-red" : ""}
              to="/"
              onClick={() => setShow(1)}
            >
              Smartphones
            </Link>
          </li>
          <li>
            <Link
              className={show === 2 ? "color-red" : ""}
              to="/"
              onClick={() => setShow(2)}
            >
              MacBook
            </Link>
          </li>
          <li>
            <Link
              className={show === 3 ? "color-red" : ""}
              to="/"
              onClick={() => setShow(3)}
            >
              iPad & Tablets
            </Link>
          </li>
          <li>
            <Link
              className={show === 4 ? "color-red" : ""}
              to="/"
              onClick={() => setShow(4)}
            >
              Informatica y Accesories
            </Link>
          </li>
          <li>
            <Link
              className={show === 5 ? "color-red" : ""}
              to="/"
              onClick={() => setShow(5)}
            >
              Coleccion Apple
            </Link>
          </li>
          <li>
            <Link
              className={show === 6 ? "color-red" : ""}
              to="/"
              onClick={() => setShow(6)}
            >
              Cascos, Altavoces y Audio
            </Link>
          </li>
          <li>
            <Link
              className={show === 7 ? "color-red" : ""}
              to="/"
              onClick={() => setShow(7)}
            >
              Apple watch
            </Link>
          </li>
          <li>
            <Link
              className={show === 8 ? "color-red" : ""}
              to="/"
              onClick={() => setShow(8)}
            >
              Accessorios
            </Link>
          </li>
          <li>
            <Link
              className={show === 9 ? "color-red" : ""}
              to="/"
              onClick={() => setShow(9)}
            >
              Televisores y Sonido
            </Link>
          </li>
          <li>
            <Link
              className={show === 10 ? "color-red" : ""}
              to="/"
              onClick={() => setShow(10)}
            >
              Tienda oficial
            </Link>
          </li>
        </ul>
      </Box>
      <Box className="sidebar-content">
        <SidebarContent show={show} />
      </Box>
    </Box>
  );
};

export default Sidebar;
