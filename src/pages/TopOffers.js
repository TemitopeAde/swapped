import { Box, Stack } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Header from "../components/Header";
import iphone8 from "../images/iphone8.png";
import Countdown from "react-countdown";
import "./topoffers.css";

const TopOffers = () => {
  const Completionist = () => <span>You are good to go!</span>;

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span style={{fontSize: '.8rem', textAlign: 'right'}}>
          {hours}hr:{minutes}m:{seconds}s
        </span>
      );
    }
  };

  return (
    <Box className="top-offers">
      <Header />
      <Box>
        <Container>
          <Box>
            <h1 className="mt-5 mb-5">Top OFERTAS</h1>

            <Box className="top-offers-grid">
              <Box
                sx={{ borderRadius: "20px" }}
                gap="20px"
                className="p-3 shadow flex-column"
                position="relative"
              >
                <h6>iPhone 8 Plus</h6>
                <Box className="flex-start" gap="17px">
                  <h5>
                    <s>399€</s>
                  </h5>
                  <h5>299€</h5>
                </Box>

                <Box className="flex-start" gap="30px">
                  <Box>
                    <Stack direction="column" spacing={1}>
                      <h6>64gb</h6>
                      <Box
                        sx={{
                          cursor: "pointer",
                          borderRadius: "50%",
                          width: "30px",
                          height: "30px",
                          background: "grey",
                        }}
                      ></Box>
                      <img
                        className="badges"
                        src="https://cdn.worldvectorlogo.com/logos/twitter-verified-badge.svg"
                        alt=""
                      />
                    </Stack>
                  </Box>
                  <Box>
                    <img
                      className="phone-img"
                      style={{ width: "100%" }}
                      src={iphone8}
                      alt="iphone 8 Plus"
                    />
                  </Box>
                </Box>

                <Box className="flex-between mt-1">
                  <Stack direction="column" spacing={1}>
                    <h6 style={{ fontSize: "0.7rem" }}>
                      La oferta finaliza en:
                    </h6>
                    <Countdown date={Date.now() + 5000000} renderer={renderer} />
                  </Stack>
                  <Box>
                    <button
                      style={{ fontSize: ".7rem", borderRadius: "30px" }}
                      className="btn btn-success"
                    >
                      MORE INFO
                    </button>
                  </Box>
                </Box>

                <Box sx={{top: '10px', right: '10px'}} position="absolute">
                    <button className="btn btn-danger">10%</button>
                </Box>
              </Box>
              <Box
                sx={{ borderRadius: "20px" }}
                gap="20px"
                className="p-3 shadow flex-column"
                position="relative"
              >
                <h6>iPhone 8 Plus</h6>
                <Box className="flex-start" gap="17px">
                  <h5>
                    <s>399€</s>
                  </h5>
                  <h5>299€</h5>
                </Box>

                <Box className="flex-start" gap="30px">
                  <Box>
                    <Stack direction="column" spacing={1}>
                      <h6>64gb</h6>
                      <Box
                        sx={{
                          cursor: "pointer",
                          borderRadius: "50%",
                          width: "30px",
                          height: "30px",
                          background: "grey",
                        }}
                      ></Box>
                      <img
                        className="badges"
                        src="https://cdn.worldvectorlogo.com/logos/twitter-verified-badge.svg"
                        alt=""
                      />
                    </Stack>
                  </Box>
                  <Box>
                    <img
                      className="phone-img"
                      style={{ width: "100%" }}
                      src={iphone8}
                      alt="iphone 8 Plus"
                    />
                  </Box>
                </Box>

                <Box className="flex-between mt-1">
                  <Stack direction="column" spacing={1}>
                    <h6 style={{ fontSize: "0.7rem" }}>
                      La oferta finaliza en:
                    </h6>
                    <Countdown date={Date.now() + 5000000} renderer={renderer} />
                  </Stack>
                  <Box>
                    <button
                      style={{ fontSize: ".7rem", borderRadius: "30px" }}
                      className="btn btn-success"
                    >
                      MORE INFO
                    </button>
                  </Box>
                </Box>

                <Box sx={{top: '10px', right: '10px'}} position="absolute">
                    <button className="btn btn-danger">10%</button>
                </Box>
              </Box>
              <Box
                sx={{ borderRadius: "20px" }}
                gap="20px"
                className="p-3 shadow flex-column"
                position="relative"
              >
                <h6>iPhone 8 Plus</h6>
                <Box className="flex-start" gap="17px">
                  <h5>
                    <s>399€</s>
                  </h5>
                  <h5>299€</h5>
                </Box>

                <Box className="flex-start" gap="30px">
                  <Box>
                    <Stack direction="column" spacing={1}>
                      <h6>64gb</h6>
                      <Box
                        sx={{
                          cursor: "pointer",
                          borderRadius: "50%",
                          width: "30px",
                          height: "30px",
                          background: "grey",
                        }}
                      ></Box>
                      <img
                        className="badges"
                        src="https://cdn.worldvectorlogo.com/logos/twitter-verified-badge.svg"
                        alt=""
                      />
                    </Stack>
                  </Box>
                  <Box>
                    <img
                      className="phone-img"
                      style={{ width: "100%" }}
                      src={iphone8}
                      alt="iphone 8 Plus"
                    />
                  </Box>
                </Box>

                <Box className="flex-between mt-1">
                  <Stack direction="column" spacing={1}>
                    <h6 style={{ fontSize: "0.7rem" }}>
                      La oferta finaliza en:
                    </h6>
                    <Countdown date={Date.now() + 5000000} renderer={renderer} />
                  </Stack>
                  <Box>
                    <button
                      style={{ fontSize: ".7rem", borderRadius: "30px" }}
                      className="btn btn-success"
                    >
                      MORE INFO
                    </button>
                  </Box>
                </Box>

                <Box sx={{top: '10px', right: '10px'}} position="absolute">
                    <button className="btn btn-danger">20%</button>
                </Box>
              </Box>
              <Box
                sx={{ borderRadius: "20px" }}
                gap="20px"
                className="p-3 shadow flex-column"
                position="relative"
              >
                <h6>iPhone 8 Plus</h6>
                <Box className="flex-start" gap="17px">
                  <h5>
                    <s>399€</s>
                  </h5>
                  <h5>299€</h5>
                </Box>

                <Box className="flex-start" gap="30px">
                  <Box>
                    <Stack direction="column" spacing={1}>
                      <h6>64gb</h6>
                      <Box
                        sx={{
                          cursor: "pointer",
                          borderRadius: "50%",
                          width: "30px",
                          height: "30px",
                          background: "grey",
                        }}
                      ></Box>
                      <img
                        className="badges"
                        src="https://cdn.worldvectorlogo.com/logos/twitter-verified-badge.svg"
                        alt=""
                      />
                    </Stack>
                  </Box>
                  <Box>
                    <img
                      className="phone-img"
                      style={{ width: "100%" }}
                      src={iphone8}
                      alt="iphone 8 Plus"
                    />
                  </Box>
                </Box>

                <Box className="flex-between mt-1">
                  <Stack direction="column" spacing={1}>
                    <h6 style={{ fontSize: "0.7rem" }}>
                      La oferta finaliza en:
                    </h6>
                    <Countdown date={Date.now() + 5000000} renderer={renderer} />
                  </Stack>
                  <Box>
                    <button
                      style={{ fontSize: ".7rem", borderRadius: "30px" }}
                      className="btn btn-success"
                    >
                      MORE INFO
                    </button>
                  </Box>
                </Box>

                <Box sx={{top: '10px', right: '10px'}} position="absolute">
                    <button className="btn btn-danger">10%</button>
                </Box>
              </Box>
              <Box
                sx={{ borderRadius: "20px" }}
                gap="20px"
                className="p-3 shadow flex-column"
                position="relative"
              >
                <h6>iPhone 8 Plus</h6>
                <Box className="flex-start" gap="17px">
                  <h5>
                    <s>399€</s>
                  </h5>
                  <h5>299€</h5>
                </Box>

                <Box className="flex-start" gap="30px">
                  <Box>
                    <Stack direction="column" spacing={1}>
                      <h6>64gb</h6>
                      <Box
                        sx={{
                          cursor: "pointer",
                          borderRadius: "50%",
                          width: "30px",
                          height: "30px",
                          background: "grey",
                        }}
                      ></Box>
                      <img
                        className="badges"
                        src="https://cdn.worldvectorlogo.com/logos/twitter-verified-badge.svg"
                        alt=""
                      />
                    </Stack>
                  </Box>
                  <Box>
                    <img
                      className="phone-img"
                      style={{ width: "100%" }}
                      src={iphone8}
                      alt="iphone 8 Plus"
                    />
                  </Box>
                </Box>

                <Box className="flex-between mt-1">
                  <Stack direction="column" spacing={1}>
                    <h6 style={{ fontSize: "0.7rem" }}>
                      La oferta finaliza en:
                    </h6>
                    <Countdown date={Date.now() + 5000000} renderer={renderer} />
                  </Stack>
                  <Box>
                    <button
                      style={{ fontSize: ".7rem", borderRadius: "30px" }}
                      className="btn btn-success"
                    >
                      MORE INFO
                    </button>
                  </Box>
                </Box>

                <Box sx={{top: '10px', right: '10px'}} position="absolute">
                    <button className="btn btn-danger">10%</button>
                </Box>
              </Box>
              <Box
                sx={{ borderRadius: "20px" }}
                gap="20px"
                className="p-3 shadow flex-column"
                position="relative"
              >
                <h6>iPhone 8 Plus</h6>
                <Box className="flex-start" gap="17px">
                  <h5>
                    <s>399€</s>
                  </h5>
                  <h5>299€</h5>
                </Box>

                <Box className="flex-start" gap="30px">
                  <Box>
                    <Stack direction="column" spacing={1}>
                      <h6>64gb</h6>
                      <Box
                        sx={{
                          cursor: "pointer",
                          borderRadius: "50%",
                          width: "30px",
                          height: "30px",
                          background: "grey",
                        }}
                      ></Box>
                      <img
                        className="badges"
                        src="https://cdn.worldvectorlogo.com/logos/twitter-verified-badge.svg"
                        alt=""
                      />
                    </Stack>
                  </Box>
                  <Box>
                    <img
                      className="phone-img"
                      style={{ width: "100%" }}
                      src={iphone8}
                      alt="iphone 8 Plus"
                    />
                  </Box>
                </Box>

                <Box className="flex-between mt-1">
                  <Stack direction="column" spacing={1}>
                    <h6 style={{ fontSize: "0.7rem" }}>
                      La oferta finaliza en:
                    </h6>
                    <Countdown date={Date.now() + 5000000} renderer={renderer} />
                  </Stack>
                  <Box>
                    <button
                      style={{ fontSize: ".7rem", borderRadius: "30px" }}
                      className="btn btn-success"
                    >
                      MORE INFO
                    </button>
                  </Box>
                </Box>

                <Box sx={{top: '10px', right: '10px'}} position="absolute">
                    <button className="btn btn-danger">5%</button>
                </Box>
              </Box>
              <Box
                sx={{ borderRadius: "20px" }}
                gap="20px"
                className="p-3 shadow flex-column"
                position="relative"
              >
                <h6>iPhone 8 Plus</h6>
                <Box className="flex-start" gap="17px">
                  <h5>
                    <s>399€</s>
                  </h5>
                  <h5>299€</h5>
                </Box>

                <Box className="flex-start" gap="30px">
                  <Box>
                    <Stack direction="column" spacing={1}>
                      <h6>64gb</h6>
                      <Box
                        sx={{
                          cursor: "pointer",
                          borderRadius: "50%",
                          width: "30px",
                          height: "30px",
                          background: "grey",
                        }}
                      ></Box>
                      <img
                        className="badges"
                        src="https://cdn.worldvectorlogo.com/logos/twitter-verified-badge.svg"
                        alt=""
                      />
                    </Stack>
                  </Box>
                  <Box>
                    <img
                      className="phone-img"
                      style={{ width: "100%" }}
                      src={iphone8}
                      alt="iphone 8 Plus"
                    />
                  </Box>
                </Box>

                <Box className="flex-between mt-1">
                  <Stack direction="column" spacing={1}>
                    <h6 style={{ fontSize: "0.7rem" }}>
                      La oferta finaliza en:
                    </h6>
                    <Countdown date={Date.now() + 5000000} renderer={renderer} />
                  </Stack>
                  <Box>
                    <button
                      style={{ fontSize: ".7rem", borderRadius: "30px" }}
                      className="btn btn-success"
                    >
                      MORE INFO
                    </button>
                  </Box>
                </Box>

                <Box sx={{top: '10px', right: '10px'}} position="absolute">
                    <button className="btn btn-danger">10%</button>
                </Box>
              </Box>
              <Box
                sx={{ borderRadius: "20px" }}
                gap="20px"
                className="p-3 shadow flex-column"
                position="relative"
              >
                <h6>iPhone 8 Plus</h6>
                <Box className="flex-start" gap="17px">
                  <h5>
                    <s>399€</s>
                  </h5>
                  <h5>299€</h5>
                </Box>

                <Box className="flex-start" gap="30px">
                  <Box>
                    <Stack direction="column" spacing={1}>
                      <h6>64gb</h6>
                      <Box
                        sx={{
                          cursor: "pointer",
                          borderRadius: "50%",
                          width: "30px",
                          height: "30px",
                          background: "grey",
                        }}
                      ></Box>
                      <img
                        className="badges"
                        src="https://cdn.worldvectorlogo.com/logos/twitter-verified-badge.svg"
                        alt=""
                      />
                    </Stack>
                  </Box>
                  <Box>
                    <img
                      className="phone-img"
                      style={{ width: "100%" }}
                      src={iphone8}
                      alt="iphone 8 Plus"
                    />
                  </Box>
                </Box>

                <Box className="flex-between mt-1">
                  <Stack direction="column" spacing={1}>
                    <h6 style={{ fontSize: "0.7rem" }}>
                      La oferta finaliza en:
                    </h6>
                    <Countdown date={Date.now() + 5000000} renderer={renderer} />
                  </Stack>
                  <Box>
                    <button
                      style={{ fontSize: ".7rem", borderRadius: "30px" }}
                      className="btn btn-success"
                    >
                      MORE INFO
                    </button>
                  </Box>
                </Box>

                <Box sx={{top: '10px', right: '10px'}} position="absolute">
                    <button className="btn btn-danger">20%</button>
                </Box>
              </Box>
              <Box
                sx={{ borderRadius: "20px" }}
                gap="20px"
                className="p-3 shadow flex-column"
                position="relative"
              >
                <h6>iPhone 8 Plus</h6>
                <Box className="flex-start" gap="17px">
                  <h5>
                    <s>399€</s>
                  </h5>
                  <h5>299€</h5>
                </Box>

                <Box className="flex-start" gap="30px">
                  <Box>
                    <Stack direction="column" spacing={1}>
                      <h6>64gb</h6>
                      <Box
                        sx={{
                          cursor: "pointer",
                          borderRadius: "50%",
                          width: "30px",
                          height: "30px",
                          background: "grey",
                        }}
                      ></Box>
                      <img
                        className="badges"
                        src="https://cdn.worldvectorlogo.com/logos/twitter-verified-badge.svg"
                        alt=""
                      />
                    </Stack>
                  </Box>
                  <Box>
                    <img
                      className="phone-img"
                      style={{ width: "100%" }}
                      src={iphone8}
                      alt="iphone 8 Plus"
                    />
                  </Box>
                </Box>

                <Box className="flex-between mt-1">
                  <Stack direction="column" spacing={1}>
                    <h6 style={{ fontSize: "0.7rem" }}>
                      La oferta finaliza en:
                    </h6>
                    <Countdown date={Date.now() + 5000000} renderer={renderer} />
                  </Stack>
                  <Box>
                    <button
                      style={{ fontSize: ".7rem", borderRadius: "30px" }}
                      className="btn btn-success"
                    >
                      MORE INFO
                    </button>
                  </Box>
                </Box>

                <Box sx={{top: '10px', right: '10px'}} position="absolute">
                    <button className="btn btn-danger">10%</button>
                </Box>
              </Box>
              <Box
                sx={{ borderRadius: "20px" }}
                gap="20px"
                className="p-3 shadow flex-column"
                position="relative"
              >
                <h6>iPhone 8 Plus</h6>
                <Box className="flex-start" gap="17px">
                  <h5>
                    <s>399€</s>
                  </h5>
                  <h5>299€</h5>
                </Box>

                <Box className="flex-start" gap="30px">
                  <Box>
                    <Stack direction="column" spacing={1}>
                      <h6>64gb</h6>
                      <Box
                        sx={{
                          cursor: "pointer",
                          borderRadius: "50%",
                          width: "30px",
                          height: "30px",
                          background: "red",
                        }}
                      ></Box>
                      <img
                        className="badges"
                        src="https://cdn.worldvectorlogo.com/logos/twitter-verified-badge.svg"
                        alt=""
                      />
                    </Stack>
                  </Box>
                  <Box>
                    <img
                      className="phone-img"
                      style={{ width: "100%" }}
                      src={iphone8}
                      alt="iphone 8 Plus"
                    />
                  </Box>
                </Box>

                <Box className="flex-between mt-1">
                  <Stack direction="column" spacing={1}>
                    <h6 style={{ fontSize: "0.7rem" }}>
                      La oferta finaliza en:
                    </h6>
                    <Countdown date={Date.now() + 5000000} renderer={renderer} />
                  </Stack>
                  <Box>
                    <button
                      style={{ fontSize: ".7rem", borderRadius: "30px" }}
                      className="btn btn-success"
                    >
                      MORE INFO
                    </button>
                  </Box>
                </Box>

                <Box sx={{top: '10px', right: '10px'}} position="absolute">
                    <button className="btn btn-danger">10%</button>
                </Box>
              </Box>
              <Box
                sx={{ borderRadius: "20px" }}
                gap="20px"
                className="p-3 shadow flex-column"
                position="relative"
              >
                <h6>iPhone 8 Plus</h6>
                <Box className="flex-start" gap="17px">
                  <h5>
                    <s>399€</s>
                  </h5>
                  <h5>299€</h5>
                </Box>

                <Box className="flex-start" gap="30px">
                  <Box>
                    <Stack direction="column" spacing={1}>
                      <h6>64gb</h6>
                      <Box
                        sx={{
                          cursor: "pointer",
                          borderRadius: "50%",
                          width: "30px",
                          height: "30px",
                          background: "red",
                        }}
                      ></Box>
                      <img
                        className="badges"
                        src="https://cdn.worldvectorlogo.com/logos/twitter-verified-badge.svg"
                        alt=""
                      />
                    </Stack>
                  </Box>
                  <Box>
                    <img
                      className="phone-img"
                      style={{ width: "100%" }}
                      src={iphone8}
                      alt="iphone 8 Plus"
                    />
                  </Box>
                </Box>

                <Box className="flex-between mt-1">
                  <Stack direction="column" spacing={1}>
                    <h6 style={{ fontSize: "0.7rem" }}>
                      La oferta finaliza en:
                    </h6>
                    <Countdown date={Date.now() + 5000000} renderer={renderer} />
                  </Stack>
                  <Box>
                    <button
                      style={{ fontSize: ".7rem", borderRadius: "30px" }}
                      className="btn btn-success"
                    >
                      MORE INFO
                    </button>
                  </Box>
                </Box>

                <Box sx={{top: '10px', right: '10px'}} position="absolute">
                    <button className="btn btn-danger">10%</button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default TopOffers;
