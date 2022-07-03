import { Box, Stack } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import iphone8 from "../images/iphone8.png";
import "./cellphones.css";

const CellPhones = () => {
  return (
    <Box className="cellphone-container">
      <Header />
      <Box className="cellphone-wrap">
        <Box className="filter-bar">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
            eaque officiis autem sequi ullam odit quibusdam velit illum quaerat
            recusandae!
          </p>
        </Box>

        <Box className="filtered-content">
          <Box>
            <Box className="cellphone-grid">
              <Box
                sx={{ borderRadius: "20px" }}
                gap="20px"
                className="p-3 shadow flex-column"
                position="relative"
              >
                <h6>iPhone 8 Plus</h6>
                <Box className="flex-start" gap="17px">
                  <h5 className="bolder">299€</h5>
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
                  <Box>
                    <h6>
                      PRODUCTO <br /> EN STOCK{" "}
                    </h6>
                  </Box>

                  <Box>
                    <button
                      style={{ fontSize: ".7rem", borderRadius: "30px" }}
                      className="btn btn-success"
                    >
                      MORE INFO
                    </button>
                  </Box>
                </Box>

                <Box sx={{ top: "10px", right: "10px" }} position="absolute">
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
                  <h5 className="bolder">299€</h5>
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

                <Box
                  className=" flex-end mt-1"
                  style={{ justifyContent: "flex-end" }}
                >
                  <Box>
                    <button
                      style={{ fontSize: ".7rem", borderRadius: "30px" }}
                      className="btn btn-success"
                    >
                      MORE INFO
                    </button>
                  </Box>
                </Box>

                <Box sx={{ top: "10px", right: "10px" }} position="absolute">
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
                  <h5 className="bolder">299€</h5>
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
                  <Box>
                    <h6>
                      PRODUCTO <br /> EN STOCK{" "}
                    </h6>
                  </Box>

                  <Box>
                    <button
                      style={{ fontSize: ".7rem", borderRadius: "30px" }}
                      className="btn btn-success"
                    >
                      MORE INFO
                    </button>
                  </Box>
                </Box>

                <Box sx={{ top: "10px", right: "10px" }} position="absolute">
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
                  <h5 className="bolder">299€</h5>
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

                <Box
                  className=" flex-end mt-1"
                  style={{ justifyContent: "flex-end" }}
                >
                  <Box>
                    <button
                      style={{ fontSize: ".7rem", borderRadius: "30px" }}
                      className="btn btn-success"
                    >
                      MORE INFO
                    </button>
                  </Box>
                </Box>

                <Box sx={{ top: "10px", right: "10px" }} position="absolute">
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
                  <h5 className="bolder">299€</h5>
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
                  <Box>
                    <h6>
                      PRODUCTO <br /> EN STOCK{" "}
                    </h6>
                  </Box>

                  <Box>
                    <button
                      style={{ fontSize: ".7rem", borderRadius: "30px" }}
                      className="btn btn-success"
                    >
                      MORE INFO
                    </button>
                  </Box>
                </Box>

                <Box sx={{ top: "10px", right: "10px" }} position="absolute">
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
                  <h5 className="bolder">299€</h5>
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

                <Box
                  className=" flex-end mt-1"
                  style={{ justifyContent: "flex-end" }}
                >
                  <Box>
                    <button
                      style={{ fontSize: ".7rem", borderRadius: "30px" }}
                      className="btn btn-success"
                    >
                      MORE INFO
                    </button>
                  </Box>
                </Box>

                <Box sx={{ top: "10px", right: "10px" }} position="absolute">
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
                  <h5 className="bolder">299€</h5>
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
                  <Box>
                    <h6>
                      PRODUCTO <br /> EN STOCK{" "}
                    </h6>
                  </Box>

                  <Box>
                    <button
                      style={{ fontSize: ".7rem", borderRadius: "30px" }}
                      className="btn btn-success"
                    >
                      MORE INFO
                    </button>
                  </Box>
                </Box>

                <Box sx={{ top: "10px", right: "10px" }} position="absolute">
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
                  <h5 className="bolder">299€</h5>
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

                <Box
                  className=" flex-end mt-1"
                  style={{ justifyContent: "flex-end" }}
                >
                  <Box>
                    <button
                      style={{ fontSize: ".7rem", borderRadius: "30px" }}
                      className="btn btn-success"
                    >
                      MORE INFO
                    </button>
                  </Box>
                </Box>

                <Box sx={{ top: "10px", right: "10px" }} position="absolute">
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
                  <h5 className="bolder">299€</h5>
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
                  <Box>
                    <h6>
                      PRODUCTO <br /> EN STOCK{" "}
                    </h6>
                  </Box>

                  <Box>
                    <button
                      style={{ fontSize: ".7rem", borderRadius: "30px" }}
                      className="btn btn-success"
                    >
                      MORE INFO
                    </button>
                  </Box>
                </Box>

                <Box sx={{ top: "10px", right: "10px" }} position="absolute">
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
                  <h5 className="bolder">299€</h5>
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

                <Box
                  className=" flex-end mt-1"
                  style={{ justifyContent: "flex-end" }}
                >
                  <Box>
                    <button
                      style={{ fontSize: ".7rem", borderRadius: "30px" }}
                      className="btn btn-success"
                    >
                      MORE INFO
                    </button>
                  </Box>
                </Box>

                <Box sx={{ top: "10px", right: "10px" }} position="absolute">
                  <button className="btn btn-danger">10%</button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CellPhones;
