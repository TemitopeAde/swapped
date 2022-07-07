import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import iph from "../images/iph.png";
import iphone from "../images/iphone8.png";
import ipho from "../images/ipho.png";
import "./phone.css";
import phone from "../images/i.png";

import battery from "../images/battery.png";
import truck from "../images/truck.png";
import verified from "../images/verified.png";
import thumb from "../images/thumb.png";
import trucks from "../images/trucks.png";
import chinese from '../images/chinese.png';
import clock from '../images/clock.png';

const Phone = () => {
  const [image, setImage] = useState(3);

  const { id } = useParams();

  return (
    <div className="pb-5">
      <Header />
      <Box>
        <h6 className="mt-4">
          NUSESTROS REACONDICIONADOS / IPHONE XR / IPHONE XR 64GB
        </h6>
        <Box>
          <Box className="phone-details-grid">
            <Box>
              <Box className="phone-image">
                <Box>
                  <h6 style={{ fontSize: ".8rem", paddingLeft: "1rem" }}>
                    NUESTROS REACONDICIONADOS / IPHONE XR / IPHONE XR 64GB
                  </h6>
                </Box>
                <Box className="sticky-img">
                  <div>
                    <div
                      className={
                        image === 1 ? "slider-image toggle" : "slider-image"
                      }
                    >
                      <img src={phone} alt="" />
                    </div>
                    <div
                      className={
                        image === 2 ? "slider-image toggle" : "slider-image"
                      }
                    >
                      <img src={iph} alt="" />
                    </div>
                    <div
                      className={
                        image === 3 ? "slider-image toggle" : "slider-image"
                      }
                    >
                      <img src={ipho} alt="" />
                    </div>
                  </div>
                </Box>

                <div className="image-nav">
                  <Stack>
                    <Box>
                      <button
                        onClick={() => setImage(1)}
                        style={{ background: "none", border: "none" }}
                      >
                        <img
                          className={image === 1 ? "image-opacity" : ""}
                          src={phone}
                          alt=""
                        />
                      </button>
                    </Box>
                    <button
                      onClick={() => setImage(2)}
                      style={{ background: "none", border: "none" }}
                    >
                      <img
                        className={image === 2 ? "image-opacity" : ""}
                        src={iph}
                        alt=""
                      />
                    </button>
                    <button
                      onClick={() => setImage(3)}
                      style={{ background: "none", border: "none" }}
                    >
                      <img
                        className={image === 3 ? "image-opacity" : ""}
                        src={ipho}
                        alt=""
                      />
                    </button>
                  </Stack>
                </div>

                <Box className="footer-image-icon">
                  <Box className="footer-icons-image">
                  <img src={trucks} alt="" />
                    <span>Entrega y recogida rapida</span>
                    
                  </Box>
                  <Box className="footer-icons-image">
                  <img src={chinese} alt="" />
                    <span>Pago segura</span>
                   
                  </Box>
                  <Box className="footer-icons-image">
                    <span>Garantia y devoluciones</span>
                    <img src={clock} alt="" />
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box className="phone-details">
              <h2>iPhone XR</h2>
              <h4>64 GB - Negro - Libre</h4>

              <form>
                <Box className="other-details mt-4">
                  <h6 className="bolder">Color</h6>
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
                    <h6 className="bolder">Escapio</h6>
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
                      <h6 className="bolder">Condicion</h6>
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
                      <h6 className="bolder">Bateria:</h6>

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

                    <div className="pantella">
                      <h6 className="bolder">Protector de Pantalla</h6>

                      <div className="pantalla-grid pt-3">
                        {/* <div>
                          <label htmlFor="protector">
                            <div className="label-div2">
                              <h6 style={{ fontSize: ".8rem" }}>
                                Protector{" "}
                                <span style={{ marginLeft: "0px" }}>
                                  +9.90 $
                                </span>{" "}
                              </h6>
                            </div>
                          </label>
                          <input
                            type="radio"
                            name="protection"
                            id="protector"
                          />
                        </div>
                        <div>
                          <label htmlFor="protector">
                            <div className="label-div2">
                              <h6 style={{ fontSize: ".8rem" }}>
                                Sin Protector
                              </h6>
                            </div>
                          </label>
                          <input
                            type="radio"
                            name="protection"
                            id="protector"
                          />
                        </div> */}

                        <div className="espacioz">
                          <input
                            type="radio"
                            name="pantallo"
                            id="first-radio"
                          />
                          <label htmlFor="first-radio">
                            <div className="label-div2">
                              <h6 style={{ fontSize: ".8rem" }}>
                                Protector{" "}
                                <span style={{ marginLeft: "0px" }}>
                                  +9.90 $
                                </span>{" "}
                              </h6>
                            </div>
                          </label>
                        </div>
                        <div className="espacioz">
                          <input
                            type="radio"
                            name="pantallo"
                            id="second-radio"
                          />
                          <label htmlFor="second-radio">
                            <div className="label-div2">
                              <h6 style={{ fontSize: ".8rem" }}>
                                Sin Protector
                              </h6>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="submit-btn mt-5">
                    <button
                      type="submit"
                      style={{
                        width: "100%",
                        background: "orange",
                        borderRadius: "30px",
                        color: "white",
                      }}
                      className="btn"
                    >
                      ANADIR A LA CESTA
                    </button>
                  </div>
                </Box>
              </form>
            </Box>

            <Box className="details-section-advert">
              <Box className="advert-flex">
                <Box className="image-thumb shadow">
                  <img src={thumb} alt="" />
                </Box>

                <h6 className="">PRUEBALO SIN COMPROMISO DURANTE 14 DIAS</h6>
              </Box>
              <Box className="advert-flex">
                <Box
                  className="image-thumb shadow"
                  style={{ background: "white" }}
                >
                  <img src={battery} alt="" />
                </Box>

                <h6 className="" style={{ color: "blue" }}>
                  Bateria verificada
                </h6>
              </Box>
              <Box className="advert-flex">
                <Box className="image-thumb shadow">
                  <img src={truck} alt="" />
                </Box>

                <h6>
                  PEEXPEDICION INMEDIATA 48H MAXIMO EN PENINSULA. 96H ENVIOS A
                  ISLAS Y UNION EUROPEA
                </h6>
              </Box>
              <Box className="advert-flex">
                <Box
                  className="image-thumb shadow"
                  style={{ background: "white" }}
                >
                  <img src={battery} alt="" />
                </Box>

                <h6 style={{ color: "blue" }}>CALIDAD GARANTIZADA</h6>
              </Box>
              <Box className="advert-flex">
                <Box className="image-thumb shadow">
                  <img src={verified} alt="" />
                </Box>

                <h6 style={{ textTransform: "uppercase" }}>
                  REACONDICIONAMIENTO REALIZADO POR PROFESIONALES <br />
                  12 meses de garantia
                </h6>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Phone;
