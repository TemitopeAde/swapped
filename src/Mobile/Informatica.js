import React from "react";
import { Link } from "react-router-dom";
import "./items.css";
import Header from "../components/Header";
import mac from "../images/macbook.png";
import Landing from "../pages/Landing";
import { Box } from "@mui/material";

const Informatica = () => {
  if (window.innerWidth <= 820) {
    return (
      <Box>
        <Header />
        <Box className="mobile-items">
          <Box>
            <Box className="mobile-column">
              <h1>Accessories</h1>
              <p style={{ opacity: ".8" }}>
                Phone accessories? We got them all
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

            <Box className="mt-4 mb-5">
              <Box>
                <h6>Smartphone accessories</h6>
                <Link
                  className="vermas"
                  style={{ fontSize: "0.8rem", color: "gray" }}
                  to="/"
                >
                  Ver mas
                </Link>
              </Box>
              <Box className="mobile-grid-phones">
                <Link to="/">All smartphone accessories</Link>
                <Link to="/">Phone cases</Link>
                <Link to="/">Airpods</Link>
                <Link to="/">Chargers</Link>
                <Link to="/">Ear phones</Link>
                <Link to="/">Screen protectors</Link>
              </Box>
            </Box>

            <Box className="mt-4">
              <Box>
                <h6>Laptop accessories</h6>
                <Link
                  className="vermas"
                  style={{ fontSize: "0.8rem", color: "gray" }}
                  to="/"
                >
                  Ver mas
                </Link>
              </Box>
              <Box className="mobile-grid-phones">
                <Link to="/">All laptop accessories</Link>
                <Link to="/">Mice</Link>
                <Link to="/">Apple magic trackpad</Link>
                <Link to="/">Keyboards</Link>
                <Link to="/">Airpods</Link>
                <Link to="/">Computer monitors</Link>
                <Link to="/">Printer</Link>
                <Link to="/">Chargers</Link>
                <Link to="/">Screen Protectors</Link>
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

export default Informatica;
