import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";
// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
// or only core styles
import "@splidejs/react-splide/css/core";
import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import mac from "../images/mac.png";
import "./hero.css";

const Hero = () => {
  return (
    <Box>
      <div className="px-1 hero-section">
        <Splide aria-label="My Favorite Images">
          <SplideSlide>
            <Box className="hero-slide-flex">
              <Box>
                <Box>
                  <h3>Mackbook</h3>
                  <h3>(renewed by a) pro</h3>
                </Box>
              </Box>

              <Box className="img-cont">
                <img src={mac} alt="" className="advert-img" />
              </Box>

              <Box>
                <Box spacing={3}>
                  <Box>
                    <h3>I-year warranty</h3>
                    30-days return policy
                  </Box>

                  <Box>
                    <button className="btn btn-dark btn-lg">Shop now</button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </SplideSlide>
          <SplideSlide>
            <Box className="hero-slide-flex">
              <Box>
                <Box>
                  <h3>Mackbook</h3>
                  <h3>(renewed by a) pro</h3>
                </Box>
              </Box>

              <Box className="img-cont">
                <img src={mac} alt="" className="advert-img" />
              </Box>

              <Box>
                <Box spacing={3}>
                  <Box>
                    <h3>I-year warranty</h3>
                    30-days return policy
                  </Box>

                  <Box>
                    <button className="btn btn-dark btn-lg">Shop now</button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </SplideSlide>
        </Splide>
      </div>
    </Box>
  );
};

export default Hero;
