import { Box } from "@mui/material";
import React from "react";
import Header from "../components/Header";

import "./landing.css";

const Landing = () => {
  return (
    <Box className="landing">
      <Box>
        <Header />
        <Box className="landingpage-container">
          <Box className="landing-text">
            <h6 style={{ textAlign: "center" }}>
              Especialistas en <br /> Reacondicionados, Repuestos y <br />{" "}
              !mucho mas!
            </h6>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Landing;
