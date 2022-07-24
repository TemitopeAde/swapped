import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./items.css";
import Header from "../components/Header";
import Landing from "../pages/Landing";

const Ipad = () => {
  if (window.innerWidth <= 820) {
    return (
      <Box>
        <Header />
        <Box className="mobile-items">
          <Box>
            <Box className="mobile-column">
              <h1>Ipad & Tablets</h1>
              <p style={{ opacity: ".8" }}>
                Side effects of the perfectly renewed tablet include decreased
                e-waste and more spending
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
                <h6>Ipad & Tablets</h6>
                <Link
                  className="vermas"
                  style={{ fontSize: "0.8rem", color: "gray" }}
                  to="/"
                >
                  Ver mas
                </Link>
              </Box>
              <Box className="mobile-grid-phones">
                <Link to="/">iPad 7 (2019)</Link>
                <Link to="/">iPad 6 (2018)</Link>
                <Link to="/">iPad 5 (2017)</Link>
                <Link to="/">iPad accessories</Link>
                <Link to="/">iPad Pro 12.9</Link>
                <Link to="/">iPad Pro 11</Link>
                <Link to="/">iPad Pro 10.5</Link>
                <Link to="/">iPad Pro 9.7</Link>
                <Link to="/">iPad Pro 5 (2021)</Link>
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

export default Ipad;
