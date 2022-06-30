import React, { useRef, useState } from "react";
import { Box } from "@mui/material";
import { Container } from "@mui/material";

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { motion } from "framer-motion";

import "./header.css";

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
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.5 }}
    >
      <header className={header ? "header" : "header toggle"}>
        <Container>
          <Box>
            <motion.div
              variants={animations}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5 }}
            >
              <nav>
                <Box>
                  <Link className="logo" to="/">
                    Reswapped
                  </Link>
                </Box>

                <Box>
                  <ul className="navlinks">
                    <li>
                      <Link to="/">Quienes somos</Link>
                    </li>
                    <li>
                      <Link to="/">Ayuda</Link>
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

                    <li>
                      <form>
                        <div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="iphone 11, Samsung"
                          />
                        </div>
                      </form>
                    </li>
                  </ul>
                </Box>

                <Box className="auth-flex">
                  <Box>
                    <button>
                      <BsCart2 />
                    </button>
                  </Box>
                  <Box>
                    <button>
                      <AiOutlineUser />
                    </button>
                  </Box>
                </Box>
              </nav>
            </motion.div>
          </Box>

          <Box className="navbar-two">
            <Box>
              <a className="title" href="/">
                Todos los productos
              </a>
            </Box>
            <Box>
              <Box>
                <ul>
                  <li>
                    <Link to="/">Top OFERTAS</Link>
                  </li>
                  <li>
                    <Link to="/">Smartphones Nuevos</Link>
                  </li>
                  <li>
                    <Link to="/">Nuestros Reacondicionados</Link>
                  </li>
                  <li>
                    <Link to="/">Top OFERTAS</Link>
                  </li>
                  <li>
                    <Link to="/">Top OFERTAS</Link>
                  </li>
                  <li>
                    <Link to="/">Top OFERTAS</Link>
                  </li>
                  <li>
                    <Link to="/">Top OFERTAS</Link>
                  </li>
                  <li>
                    <Link to="/">Top OFERTAS</Link>
                  </li>
                  <li>
                    <Link to="/">Blog</Link>
                  </li>
                </ul>
              </Box>
            </Box>
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
        </Container>
      </header>
    </motion.div>
  );
};

export default Header;
