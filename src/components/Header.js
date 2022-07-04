import React, { useRef, useState } from "react";
import { Box, Stack } from "@mui/material";
import { GiHamburgerMenu } from "react-icons/gi";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BiSearchAlt2 } from "react-icons/bi";
import user from "../images/user.png";
import cart from "../images/cart.png";
import hamb from "../images/menu.png";
import close from "../images/close.png";
import closewhite from "../images/close-white.png";
import menuI from "../images/menu.png";

import "./header.css";
import Sidebar from "./Sidebar";
import MobileSidebar from "./MobileSidebar";
import closebtn from "../images/close-white.png";

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

const Header = () => {
  const [header, setHeader] = useState(true);
  const [closeTech, setCloseTech] = useState(true);
  const [sidebarToggle, setSidebarToggle] = useState(true);
  const [mobileSidebar, setMobileSidebar] = useState(false);
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
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        button
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a className="dropdown-item" href="/">
                          Action
                        </a>
                        <a className="dropdown-item" href="/">
                          Another action
                        </a>
                        <a className="dropdown-item" href="/">
                          Something else here
                        </a>
                      </div>
                    </div>

                    <li className="header-search">
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
                  onClick={() => setSidebarToggle(!sidebarToggle)}
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
                  onClick={() => setSidebarToggle(!sidebarToggle)}
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
                    <Link to="/top-offers">Good deals</Link>
                  </li>
                  <li>
                    <Link to="/">Environmental impact</Link>
                  </li>
                  <li>
                    <Link to="/">Student Discount</Link>
                  </li>
                  <li>
                    <Link to="/">Cell Phones</Link>
                  </li>
                  <li>
                    <Link to="/">iPhone</Link>
                  </li>
                  <li>
                    <Link to="/">Samsung Galaxy</Link>
                  </li>
                  <li>
                    <Link to="/">Macbook</Link>
                  </li>
                  <li>
                    <Link to="/">iPad</Link>
                  </li>
                  <li>
                    <Link to="/">Airpods</Link>
                  </li>
                  <li>
                    <Link to="/">Apple watch</Link>
                  </li>
                  <li>
                    <Link to="/">iMac</Link>
                  </li>
                  <li>
                    <Link to="/">Laptops</Link>
                  </li>
                </ul>
              </Box>
            </Box>
          </Box>

          <Box
            className={
              sidebarToggle
                ? "header-sidebar toggle shadow"
                : "header-sidebar shadow"
            }
            id="web-sidebar"
          >
            <Sidebar />
          </Box>

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

        {closeTech && (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="6vh"
            // sx={{ zIndex: '90000', background: "#81fbf3", position: "absolute" }}
            className="advert-money"

          >
            <Box sx={{position: 'relative'}}>
              {/* Got old tech? */}
              {/* <Link style={{ color: "#000", marginLeft: "5px" }} to="/">
                Take our money
              </Link> */}
              <Box sx={{ position: "absolute", top: "0px", right: "-50px" }}>
                {/* <button
                  onClick={() => setCloseTech(false)}
                  style={{
                    background: "none",
                    outline: "none",
                    border: "none",
                  }}
                >
                  <img src={close} alt="" className="mobile-close" />
                </button> */}
              </Box>
            </Box>
          </Box>
        )}
      </motion.div>
    </div>
  );
};

export default Header;
