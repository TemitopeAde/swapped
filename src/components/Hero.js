import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";
// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
// or only core styles
import "@splidejs/react-splide/css/core";
import close from "../images/close.png";
import { Box } from "@mui/material";
import mac from "../images/mac.png";
import "./hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  const [closeTech, setCloseTech] = useState(true);
  const options = {
    type: "loop",
    autoplay: true,
    pauseOnHover: true,
    arrows: false
  };
  return (
    <Box>
      <div className="px-1 hero-section">
        {closeTech && (
          <Box
            style={{
              textAlign: "center",
              background: "#00c3ee",
              marginTop: ".4rem",
            }}
          >
            <Box sx={{ position: "relative" }}>
              <Box
                style={{
                  height: "100%",
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <p style={{ paddingTop: "1rem" }}>
                  Got old tech?
                  <Link style={{ marginLeft: '8px', color: "#000" }} to="/">
                    Take our money
                  </Link>
                </p>
              </Box>
              <Box style={{ position: "absolute", top: "0", right: "10px" }}>
                <button
                  onClick={() => setCloseTech(false)}
                  style={{
                    background: "none",
                    outline: "none",
                    border: "none",
                  }}
                >
                  <img src={close} alt="" className="mobile-close" />
                </button>
              </Box>
            </Box>
          </Box>
        )}

        <Splide
          options={options}
          
        >
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
