import { Box, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "./phone.css";

const Phone = () => {
  return (
    <div className="pb-5">
      <Header />
      <Box>
        <h6>NUSESTROS REACONDICIONADOS / IPHONE XR / IPHONE XR 64GB</h6>
        <Box>
          <Box className="phone-details-grid">
            <Box className="phone-image"></Box>

            <Box className="phone-details">
              <h2>iPhone XR</h2>
              <h4>64 GB - Negro - Libre</h4>

              <form>
                <Box className="other-details mt-4">
                  <h6>Color</h6>
                  <div className="color-grid">
                    <div className="color negro">
                      <input type="radio" name="color" id="negro" />
                      <label htmlFor="negro">Negro</label>
                    </div>
                    <div className="color azul">
                      <input type="radio" name="color" id="azul" />
                      <label htmlFor="azul">Azul</label>
                    </div>
                    <div className="color coral">
                      <input type="radio" name="color" id="coral" />
                      <label htmlFor="coral">Coral</label>
                    </div>
                    <div className="color red">
                      <input type="radio" name="color" id="red" />
                      <label htmlFor="red">(Product)Red</label>
                    </div>
                    <div className="color amarillo">
                      <input type="radio" name="color" id="amarillo" />
                      <label htmlFor="amarillo">Amarillo</label>
                    </div>
                    <div className="color blanco">
                      <input type="radio" name="color" id="blanco" />
                      <label htmlFor="blanco">Blanco</label>
                    </div>
                  </div>

                  <div className="espacio-cont mt-5">
                    <h6>Escapio</h6>
                    <div className="espacio-grid ">
                      <div className="espacio">
                        <input type="radio" name="espacio" id="64gb" />
                        <label htmlFor="64gb">64 GB</label>
                      </div>
                      <div className="espacio">
                        <input type="radio" name="espacio" id="128gb" />
                        <label htmlFor="128gb">128 GB</label>
                      </div>
                      <div className="espacio">
                        <input type="radio" name="espacio" id="256gb" />
                        <label htmlFor="256gb">256 GB</label>
                      </div>
                    </div>
                  </div>

                  <div className="condicion-cont mt-5">
                    <Stack direction="row" justifyContent="space-between">
                      <h6>Condicion</h6>
                      <Link style={{ color: "black" }} to="/">
                        Ver mas
                      </Link>
                    </Stack>

                    <div className="espacio-grid ">
                      <div className="espacio">
                        <input type="radio" name="condicion" id="bueno" />
                        <label htmlFor="bueno">
                          <div style={{ height: "50px", textAlign: "center" }}>
                            <h6>Bueno</h6>
                            <p>289 $</p>
                          </div>
                        </label>
                      </div>
                      <div className="espacio">
                        <input type="radio" name="condicion" id="muy-bueno" />
                        <label htmlFor="muy-bueno">
                          <div style={{ height: "50px", textAlign: "center" }}>
                            <h6>Muy Bueno</h6>
                            <p>309 $</p>
                          </div>
                        </label>
                      </div>
                      <div className="espacio">
                        <input type="radio" name="condicion" id="excelente" />
                        <label htmlFor="excelente">
                          <div style={{ height: "50px", textAlign: "center" }}>
                            <h6>Excelente</h6>
                            <p>329 $</p>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <ul
                    className="list-con mt-3 mb-3"
                    style={{ listStyle: "disc" }}
                  >
                    <li className="mb-3" style={{ listStyle: "disc" }}>
                      La conditicion bueno significia que el producto es 100%
                      functional, puede contener roces o rasgunos en pantalla,
                      marco o trasera
                    </li>
                    <li style={{ listStyle: "disc" }}>
                      <h6 style={{ fontWeight: "bolder" }}>
                        ESTE PRODUCTO TIENE DESCUENTO AL COMPRAR 10 UNIDADES 0,
                        CAMBIA LA CANTIDAD EN CARRITO
                      </h6>
                    </li>
                  </ul>

                  <div className="form-grid-flex mt-5">
                    <div className="bateria">
                      <h6>Bateria:</h6>

                      <div className="bateria-grid ">
                        <div className="espacio">
                          <input
                            type="radio"
                            name="bateria-form"
                            id="first-label"
                          />
                          <label htmlFor="first-label">
                            <div
                              className="label-div"
                              style={{ height: "50px", textAlign: "center" }}
                            >
                              <h6>Estandar</h6>
                              <p className="checked-mark">&#10004;</p>
                            </div>
                          </label>
                        </div>
                        <div className="espacio">
                          <input
                            type="radio"
                            name="bateria-form"
                            id="second-label"
                          />
                          <label htmlFor="second-label">
                            <div
                              className="label-div"
                              style={{ height: "50px", textAlign: "center" }}
                            >
                              <h6>Nueva</h6>
                              <p className="checked-mark">+ 25 $</p>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="pantalla-grid pt-3">
                      <div>
                        <label htmlFor="protector">
                          <div className="label-div2">
                            <h6 style={{ fontSize: ".8rem" }}>
                              Protector{" "}
                              <span style={{ marginLeft: "0px" }}>+9.90 $</span>{" "}
                            </h6>
                          </div>
                        </label>
                        <input type="radio" name="protection" id="protector" />
                      </div>
                      <div>
                        <label htmlFor="protector">
                          <div className="label-div2">
                            <h6 style={{ fontSize: ".8rem" }}>Sin Protector</h6>
                          </div>
                        </label>
                        <input type="radio" name="protection" id="protector" />
                      </div>
                    </div>
                  </div>
                </Box>
              </form>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Phone;
