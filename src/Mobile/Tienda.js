import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./items.css";
import Header from "../components/Header";
import Landing from "../pages/Landing";

const Tienda = () => {
  if (window.innerWidth <= 820) {
    return (
      <Box>
        <Header />
        <Box className="mobile-items">
          <Box>
            <Box className="mobile-column">
              <h1>Smartphones</h1>
              <p style={{ opacity: ".8" }}>
                Apple, Samsung, Huawei, Xiami...nos to
                <br />
                Quitan de las manos!
              </p>
              <div className="text-center">
                <button
                  style={{ fontFamily: "Poppins", textAlign: "center" }}
                  className="btn btn-light"
                >
                  Ver ofertas
                </button>
              </div>
            </Box>

            <Box className="mt-4">
              <Box>
                <h6>iPhone</h6>
                <Link
                  className="vermas"
                  style={{ fontSize: "0.8rem", color: "gray" }}
                  to="/"
                >
                  Ver mas
                </Link>
              </Box>
              <Box className="mobile-grid-phones">
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
        </Box>
      </Box>
    );
  }

  if (window.innerWidth > 820) {
    return <Landing />;
  }
};

export default Tienda;
