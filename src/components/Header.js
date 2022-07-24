import React, { useRef, useState, useEffect } from "react";
import { Box, Stack } from "@mui/material";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BiSearchAlt2 } from "react-icons/bi";
import user from "../images/user.png";
import cart from "../images/cart.png";
import hamb from "../images/menu.png";
import closewhite from "../images/close-white.png";
import menuI from "../images/menu.png";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import "./header.css";
import Sidebar from "./Sidebar";
import MobileSidebar from "./MobileSidebar";
import closebtn from "../images/close-white.png";
import es from "../images/es.svg";
import gb from "../images/gb.svg";
import Modal from "../Sidebar/index";
import SidebarContent from "./SidebarContent";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "Welcome to React": "Welcome to React and react-i18next",
        },
      },
      fr: {
        translation: {
          "Welocme to React": "Bienvenue sur React et react-i18next",
        },
      },
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
  });

const countries = [
  {
    label: "Spain",
    src: es,
    link: " ",
    value: "ES",
  },
  {
    label: "English",
    src: gb,
    link: " ",
    value: "GB",
  },
];

const Header = () => {
  const [header, setHeader] = useState(true);
  const [sidebarToggle, setSidebarToggle] = useState(true);
  const [mobileSidebar, setMobileSidebar] = useState(false);
  const [country, setCountry] = React.useState(es);
  const [open, setOpen] = React.useState(false);
  const [mode, setMode] = React.useState(false);
  const [show, setShow] = useState(1);
  const modalRef = useRef();
  console.log(modalRef.current);

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const headerRef = useRef();
  const handleClick = (e) => {
    e.preventDefault();
    setHeader(!header);
  };

  const animations = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector(".header");
    const scrollTop = window.scrollY;
    scrollTop >= 650
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  return (
    <div ref={headerRef}>
      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.5 }}
      >
        <header className={header ? "header" : "header toggle"}>
          <Box>
            <motion.div
              variants={animations}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5 }}
            >
              <nav className="nav-web">
                <Box>
                  <Link className="logo" to="/">
                    Reswapped
                  </Link>
                </Box>

                <Box>
                  <ul className="navlinks">
                    <li>
                      <Link to="/">About us</Link>
                    </li>
                    <li>
                      <Link to="/">Trade-in</Link>
                    </li>
                    <div className="dropdown">
                      <form autoComplete="off">
                        <FormControl>
                          <InputLabel htmlFor="open-select" />
                          <Select
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            value={country}
                            name="country"
                            onChange={handleChange}
                            inputProps={{
                              id: "open-select",
                            }}
                          >
                            {countries.map((option, key) => (
                              <MenuItem value={option.src} key={key}>
                                <img src={option.src} alt={option.label} />{" "}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </form>
                    </div>

                    <li className="header-search">
                      <form>
                        <Box position="relative">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Are you looking for an iPhone 11, MacBook, Samsung"
                            maxLength="45"
                          />

                          <Box postion="absolute" className="search-box-header">
                            <button type="submit">
                              <BiSearchAlt2 />
                            </button>
                          </Box>
                        </Box>
                      </form>
                    </li>
                  </ul>
                </Box>

                <Box className="auth-flex">
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      outline: "none",
                    }}
                  >
                    <img src={user} alt="" />
                  </button>
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      outline: "none",
                    }}
                  >
                    <img src={cart} alt="" />
                  </button>
                </Box>
              </nav>

              <nav className="nav-mobile">
                <Stack spacing={2} sx={{ width: "100%" }}>
                  <Box className="flex-mobile">
                    {mobileSidebar ? (
                      <button
                        style={{
                          background: "none",
                          border: "none",
                          outline: "none",
                        }}
                        onClick={() => setMobileSidebar(!mobileSidebar)}
                      >
                        <img
                          src={closebtn}
                          alt=""
                          className="mobile-nav-icon"
                        />
                      </button>
                    ) : (
                      <button
                        style={{
                          background: "none",
                          border: "none",
                          outline: "none",
                        }}
                        onClick={() => setMobileSidebar(!mobileSidebar)}
                      >
                        <img src={hamb} alt="" className="mobile-nav-icon" />
                      </button>
                    )}

                    <Link className="mobile-logo" to="/">
                      Reswapped
                    </Link>

                    <Box className="flex-mobile-auth">
                      <button
                        style={{
                          background: "none",
                          border: "none",
                          outline: "none",
                        }}
                      >
                        <img src={user} alt="" />
                      </button>
                      <button
                        style={{
                          background: "none",
                          border: "none",
                          outline: "none",
                        }}
                      >
                        <img src={cart} alt="" />
                      </button>
                    </Box>
                  </Box>
                  <Box className="search-form-container">
                    <form>
                      <Box position="relative">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Are you looking for an iPhone 11, MacBook, Samsung"
                        />

                        <Box postion="absolute" className="search-box-header">
                          <button type="submit">
                            <BiSearchAlt2 />
                          </button>
                        </Box>
                      </Box>
                    </form>
                  </Box>
                </Stack>
              </nav>
            </motion.div>
          </Box>

          <Box className="navbar-two">
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                gap: "15px",
                alignItems: "center",
              }}
            >
              {setSidebarToggle ? (
                <button
                  style={{
                    background: "none",
                    border: "none",
                    outline: "none",
                  }}
                  className="title"
                  // onClick={() => setSidebarToggle(!sidebarToggle)}
                  onClick={() => {
                   setMode(!mode)
                  }}
                >
                  <img
                    style={{ width: "20px", height: "20px" }}
                    src={menuI}
                    alt=""
                  />
                  <span style={{ marginLeft: "3px" }}>All items</span>
                </button>
              ) : (
                <button
                  style={{
                    background: "none",
                    border: "none",
                    outline: "none",
                  }}
                  className="title"
                  onClick={() => {
                    setMode(!mode)
                   }}
                  // onClick={() => setSidebarToggle(!sidebarToggle)}
                >
                  <img
                    style={{ width: "20px", height: "20px" }}
                    src={closewhite}
                    alt=""
                  />
                  <span style={{ marginLeft: "3px" }}>All items</span>
                </button>
              )}
            </Box>
            <Box>
              <Box>
                <ul>
                  <li>
                    <Link to="/top-offers">Top OFERTAS</Link>
                  </li>
                  <li>
                    <Link to="/smartphones">Smartphones Nuevos</Link>
                  </li>
                  <li>
                    <Link to="/">Nuestros Recondicionados</Link>
                  </li>
                  <li>
                    <Link to="/repuestos">Repuesto</Link>
                  </li>
                  <li>
                    <Link to="/">Fundas y Protectores</Link>
                  </li>
                  <li>
                    <Link to="/">Accesorios</Link>
                  </li>
                  <li>
                    <Link to="/">Informatica y Ocio</Link>
                  </li>
                  <li>
                    <Link to="/">Material para Tiendas</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blogs</Link>
                  </li>
                </ul>
              </Box>
            </Box>
          </Box>

          {mode && (
            <Box>
              <div ref={modalRef} className="modalmode">
                <div className="modal-content">
                  <Box className="sidebar-container">
                    <Box className="sidebar">
                      <ul className="first-list">
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
                    <Box className="sidebar-content" position="relative">
                      <SidebarContent show={show} />

                      <Box
                        position="absolute"
                        sx={{ right: "20px", top: "-20px" }}
                      >
                        <button
                          style={{
                           border: 'none',
                           background: 'none',
                            fontSize: '3rem'
                          }}
                          onClick={() => setMode(false)}
                        >
                          <span
                            style={{ fontSize: "2rem" }}
                            class="clo"
                          >
                            &times;
                          </span>
                        </button>
                      </Box>
                    </Box>
                  </Box>
                </div>
              </div>
            </Box>
          )}


          <Box id="mobile-sidebar">
            <MobileSidebar sidebar={mobileSidebar} />
          </Box>

          <div className="hamburger">
            <div className="navbars">
              <div className="nav-container">
                <input
                  onClick={handleClick}
                  className="checkbox"
                  type="checkbox"
                />
                <a onClick={handleClick} href="/" className="hamburger-lines">
                  <span className="line line1"></span>
                  <span className="line line2"></span>
                  <span className="line line3"></span>
                </a>
              </div>
            </div>
          </div>
        </header>
      </motion.div>
    </div>
  );
};

export default Header;
