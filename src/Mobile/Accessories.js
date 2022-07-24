import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./items.css";
import Header from "../components/Header";
import mac from "../images/macbook.png";
import Landing from "../pages/Landing";

const Accesories = () => {
  if (window.innerWidth <= 820) {
    return (
      <Box>
        <Header />
        <Box className="mobile-items">
          <Box>
            <Box className="mobile-column">
              <h1>Macbook</h1>
              <p style={{ opacity: ".8" }}>
                Look smarter while you
                <br />
                sip that mochaccino. Or actually work
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
                <h6>Macbook</h6>
                <Link
                  className="vermas"
                  style={{ fontSize: "0.8rem", color: "gray" }}
                  to="/"
                >
                  Ver mas
                </Link>
              </Box>
              <Box className="mobile-grid-phones">
                <Link to="/">Todos ios MackBook</Link>
                <Link to="/">MackBook M1</Link>
                <Link to="/">MackBook Retina</Link>
                <Link to="/">MacBook Pro M1</Link>
                <Link to="/">MacBook Pro 2020</Link>
                <Link to="/">MacBook Pro 2019</Link>
                <Link to="/">MacBook Pro 2018</Link>
                <Link to="/">MacBook Pro 2017</Link>
                <Link to="/">MacBook Pro 2016</Link>
                <Link to="/">MacBook Pro 2015</Link>
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

export default Accesories;
