import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import '@splidejs/react-splide/css';
// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
// or only core styles
import '@splidejs/react-splide/css/core';
import { Box, Stack } from "@mui/material";

import './hero.css';


const Hero = () => {
  return (
    <div className="px-1 hero-section">
      <Splide aria-label="My Favorite Images">
        <SplideSlide>
          <Box className="hero-slide-flex" style={{background: 'yellow'}}>
            <Box>
                <Stack>
                    <h3>Mackbook</h3>
                    <h3>(renewed by a) pro</h3>
                </Stack>
            </Box>
            <Box>
                <Stack spacing={3}>
                    <Stack>
                        <h3>I-year warranty</h3>
                        30-days return policy
                    </Stack>

                    <Box>
                        <button className="btn btn-dark btn-lg">Shop now</button>
                    </Box>
                </Stack>
            </Box>
          </Box>
        </SplideSlide>
        
      </Splide>
    </div>
  );
};

export default Hero;
