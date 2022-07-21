import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import iph from "../images/iph.png";
import iphone from "../images/newPhone.png";
import ipho from "../images/ipho.png";
import "./phone.css";
import phone from "../images/phone2.png";
import battery from "../images/battery.png";
import truck from "../images/truck.png";
import verified from "../images/verified.png";
import thumb from "../images/thumb.png";
import trucks from "../images/trucks.png";
import chinese from "../images/chinese.png";
import clock from "../images/clock.png";
import phone1 from "../images/phone1.png";
import phone4 from "../images/phone4.png";

const Phone = () => {
  const [image, setImage] = useState(3);

  const { id } = useParams();

  return (
    <div className="pb-5">
      <Header />
      <Box>
        <h6 style={{ fontSize: '0.77rem'}} className="mt-4 px-3">
          NUSESTROS REACONDICIONADOS / IPHONE XR / IPHONE XR 64GB
        </h6>
        <Box>
          <Box className="phone-details-grid">
            <Box>
              <Box className="phone-image">
                <Box className="sticky-img mb-4">
                  <div>
                    <div
                      className={
                        image === 1 ? "slider-image toggle" : "slider-image"
                      }
                    >
                      <img src={phone1} alt="" />
                    </div>
                    <div
                      className={
                        image === 2 ? "slider-image toggle" : "slider-image"
                      }
                    >
                      <img src={phone4} alt="" />
                    </div>
                    <div
                      className={
                        image === 3 ? "slider-image toggle" : "slider-image"
                      }
                    >
                      <img src={iphone} alt="" />
                    </div>
                  </div>
                </Box>

                <div className="image-nav">
                  <Stack spacing={1}>
                    <Box>
                      <button
                        onClick={() => setImage(1)}
                        style={{ background: "none", border: "none" }}
                      >
                        <img
                          className={image === 1 ? "image-opacity" : ""}
                          src={phone1}
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
                        src={phone4}
                        alt=""
                      />
                    </button>
                    <button
                      onClick={() => setImage(3)}
                      style={{ background: "none", border: "none" }}
                    >
                      <img
                        className={image === 3 ? "image-opacity" : ""}
                        src={iphone}
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
                    <img src={clock} alt="" />
                    <span>Garantia y devoluciones</span>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box className="phone-details">
              <h1 style={{ fontSize: "3rem" }}>iPhone XR</h1>
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
                            <h6 style={{fontSize: '.85rem'}}>Bueno</h6>
                            <p>289 $</p>
                          </div>
                        </label>
                      </div>
                      <div className="espacio">
                        <input type="radio" name="condicion" id="muy-bueno" />
                        <label htmlFor="muy-bueno">
                          <div style={{ height: "50px", textAlign: "center" }}>
                            <h6 style={{fontSize: '.85rem'}}>Muy Bueno</h6>
                            <p>309 $</p>
                          </div>
                        </label>
                      </div>
                      <div className="espacio">
                        <input type="radio" name="condicion" id="excelente" />
                        <label htmlFor="excelente">
                          <div style={{ height: "50px", textAlign: "center" }}>
                            <h6 style={{fontSize: '.85rem'}}>Excelente</h6>
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
                        borderRadius: "30px",
                        color: "white",
                        width: "100%",
                      }}
                      className="btn btn-anadir"
                    >
                      ANADIR A LA CESTA
                    </button>
                  </div>
                </Box>
              </form>
            </Box>

            <Box className="details-section-advert">
              <Box
                style={{
                  display: "flex",
                  justifyContent: "sapce-between",
                  position: "relative",
                  gap: "1rem",
                }}
              >
                <Box
                  style={{
                    flexBasis: "30%",
                    padding: "1.4rem",
                    background: "#d5d5e9",
                    paddingBottom: "6.5rem",
                  }}
                >
                  <img src={thumb} alt="" />
                </Box>
                <Box
                  paddingRight={{ md: 2 }}
                  className="pruebalo"
                  style={{ flexBasis: "70%" }}
                >
                  <h6
                    style={{
                      fontSize: ".8rem",
                      marginTop: "22px",
                      fontFamily: "Poppins",
                    }}
                    className="header-pru"
                  >
                    PRUEBALO SIN COMPROMISO DURANTE 14 DIAS
                  </h6>
                </Box>
                <Box
                  style={{ left: "20px", position: "absolute", bottom: "20px" }}
                >
                  <Box
                    style={{
                      padding: ".6rem",
                      background: "#ffffff",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderRadius: "5px",
                      gap: "20px",
                    }}
                  >
                    <Box>
                      <img
                        src={battery}
                        alt=""
                        style={{ width: "30px", height: "30px" }}
                      />
                    </Box>
                    <Box className="pruebalo">
                      <p
                        style={{
                          fontSize: "1.1rem",
                          margin: 0,
                          padding: 0,
                          color: "rgb(25 150 241)",
                          fontWeight: "bold",
                        }}
                      >
                        Bacteria verificada
                      </p>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box
                style={{
                  display: "flex",
                  justifyContent: "sapce-between",
                  position: "relative",
                  gap: "1rem",
                }}
              >
                <Box
                  style={{
                    flexBasis: "30%",
                    padding: "1.4rem",
                    background: "#d5d5e9",
                    paddingBottom: "6.5rem",
                  }}
                >
                  <img src={truck} alt="" />
                </Box>
                <Box className="pruebalo" style={{ flexBasis: "70%" }}>
                  <h6
                    style={{
                      fontSize: ".8rem",
                      marginTop: "22px",
                      fontFamily: "Poppins",
                    }}
                    className="header-pru"
                  >
                    PRUEBALO SIN COMPROMISO DURANTE 14 DIAS PRUEBALO SIN
                    COMPROMISO DURANTE 14 DIAS
                  </h6>
                </Box>
                <Box
                  style={{ left: "20px", position: "absolute", bottom: "20px" }}
                >
                  <Box
                    style={{
                      padding: ".6rem",
                      background: "#ffffff",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderRadius: "5px",
                      gap: "20px",
                    }}
                  >
                    <Box>
                      <img
                        src={battery}
                        alt=""
                        style={{ width: "30px", height: "30px" }}
                      />
                    </Box>
                    <Box className="pruebalo">
                      <p
                        style={{
                          margin: 0,
                          padding: 0,
                          color: "rgb(25 150 241)",
                          fontWeight: "bold",
                          fontSize: "1.1rem",
                        }}
                      >
                        CALIDAD GARANTIZADA
                      </p>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box
                style={{
                  display: "flex",
                  justifyContent: "sapce-between",
                  position: "relative",
                  gap: "1rem",
                }}
              >
                <Box
                  style={{
                    flexBasis: "30%",
                    padding: "1.4rem",
                    background: "#d5d5e9",
                  }}
                >
                  <img src={verified} alt="" />
                </Box>
                <Box className="pruebalo" style={{ flexBasis: "70%" }}>
                  <h6
                    style={{
                      fontSize: ".8rem",
                      marginTop: "22px",
                      fontFamily: "Poppins",
                    }}
                    className="header-pru mb-3"
                  >
                    REACONDICIONAMIENTO REALIZADO POR PROFESIONALES
                  </h6>
                  <h6
                    style={{
                      fontSize: ".8rem",
                      marginTop: "22px",
                      fontFamily: "Poppins",
                    }}
                  >
                    12 MESES DE GARANTIA
                  </h6>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Phone;
