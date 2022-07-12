import { Box, Stack } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import iphone8 from "../images/iphone8.png";
import "./cellphones.css";
import menu from "../images/collections.png";
import half from "../images/half.png";
import {Link} from 'react-router-dom'

const CellPhones = () => {
  return (
    <Box className="cellphone-container">
      <Header />

      <Box className="cellphone-wrap">
        <Box className="filter-bar p-3">
          <form>
            <Box className="mb-5 mt-5">
              <input
                className="form-control"
                type="number"
                step="any"
                min="0"
                max="1"
                // value={numb}
                // onChange={(e) => setNumb(e.target.value)}
              />

              <h6 className="mb-3">Manufacturer</h6>

              <div class="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Apple
                </label>
              </div>
              <div class="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Apple iPhones
                </label>
              </div>
              <div class="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Google
                </label>
              </div>
              <div class="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Huawei
                </label>
              </div>
            </Box>

            <Box className="mt-2">
              <h6 className="mb-3">Model</h6>

              <div class="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Galaxy A52 5G
                </label>
              </div>
              <div class="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Galaxy A90 5G
                </label>
              </div>
              <div class="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Galaxy Fold
                </label>
              </div>
              <div class="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Galaxy J6 Plus
                </label>
              </div>
            </Box>

            <Box className="mb-5 mt-5">
              <h6 className="mb-3">Storage</h6>

              <div class="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Apple
                </label>
              </div>
              <div class="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Apple iPhones
                </label>
              </div>
              <div class="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Google
                </label>
              </div>
              <div class="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Huawei
                </label>
              </div>
            </Box>

            <Box className="mb-5 mt-5">
              <h6 className="mb-3">Condition</h6>

              <div class="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Apple
                </label>
              </div>
              <div class="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Apple iPhones
                </label>
              </div>
              <div class="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Google
                </label>
              </div>
              <div class="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Huawei
                </label>
              </div>
            </Box>

            <Box className="mb-5 mt-5">
              <h6 className="mb-3">Colour</h6>

              <div class="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Apple
                </label>
              </div>
              <div class="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Apple iPhones
                </label>
              </div>
              <div class="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Google
                </label>
              </div>
              <div class="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Huawei
                </label>
              </div>
            </Box>
          </form>
        </Box>

        <Box className="filtered-content">
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "2rem",
              }}
            >
              <h1 className="mb-5">Smartphones Nuevo</h1>

              <Box
                style={{
                  display: "flex",
                  alignIalignItems: "center",
                  justifyContent: "space-between",
                  gap: "10px",
                  padding: "20px",
                }}
              >
                <Box>
                  <button style={{ border: "none", background: "#fff" }}>
                    <img
                      src={menu}
                      style={{ width: "20px", height: "20px" }}
                      alt=""
                    />
                  </button>
                </Box>
                <Box>
                  <button style={{ border: "none", background: "#fff" }}>
                    <img
                      src={half}
                      style={{ width: "20px", height: "20px" }}
                      alt=""
                    />
                  </button>
                </Box>
              </Box>
            </Box>

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
                    <Link to="/smart-phones/2"
                      style={{ fontSize: ".7rem", borderRadius: "30px" }}
                      className="btn btn-success"
                    >
                      MORE INFO
                    </Link>
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
                    <Link to="/smart-phones/2"
                      style={{ fontSize: ".7rem", borderRadius: "30px" }}
                      className="btn btn-success"
                    >
                      MORE INFO
                    </Link>
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
                    <Link to="/smart-phones/2"
                      style={{ fontSize: ".7rem", borderRadius: "30px" }}
                      className="btn btn-success"
                    >
                      MORE INFO
                    </Link>
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
                    <Link to="/smart-phones/2"
                      style={{ fontSize: ".7rem", borderRadius: "30px" }}
                      className="btn btn-success"
                    >
                      MORE INFO
                    </Link>
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
                    <Link to="/smart-phones/2"
                      style={{ fontSize: ".7rem", borderRadius: "30px" }}
                      className="btn btn-success"
                    >
                      MORE INFO
                    </Link>
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
                    <Link to="/smart-phones/2"
                      style={{ fontSize: ".7rem", borderRadius: "30px" }}
                      className="btn btn-success"
                    >
                      MORE INFO
                    </Link>
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
                    <Link to="/smart-phones/2"
                      style={{ fontSize: ".7rem", borderRadius: "30px" }}
                      className="btn btn-success"
                    >
                      MORE INFO
                    </Link>
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
                    <Link to="/smart-phones/2"
                      style={{ fontSize: ".7rem", borderRadius: "30px" }}
                      className="btn btn-success"
                    >
                      MORE INFO
                    </Link>
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
                    <Link to="/smart-phones/2"
                      style={{ fontSize: ".7rem", borderRadius: "30px" }}
                      className="btn btn-success"
                    >
                      MORE INFO
                    </Link>
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
                    <Link to="/smart-phones/2"
                      style={{ fontSize: ".7rem", borderRadius: "30px" }}
                      className="btn btn-success"
                    >
                      MORE INFO
                    </Link>
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
