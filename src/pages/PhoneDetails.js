import { Box } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import ipho from "../images/iphone8.png";
import "./phone.css";
import trucks from "../images/trucks.png";
import chinese from "../images/chinese.png";
import clock from "../images/clock.png";

const PhoneDetails = () => {
  return (
    <div className="pb-3">
      <Header />
      <Box>
        <Box>
          <Box className="phonedetails-details-grid">
            <Box>
              <Box className="phone-image">
                <Box>
                  <h6 style={{ fontSize: ".8rem", paddingLeft: "1rem" }}>
                    NUESTROS REACONDICIONADOS / IPHONE XR / IPHONE XR 64GB
                  </h6>
                </Box>
                <Box className="phone-image-details">
                  <img src={ipho} alt="" />
                </Box>

                <Box className="text-center mt-3 mb-3">
                  <h6>
                    TODOS NUESTRO REPUESTOS TIENEN GARANTIA SIEMPRE QUE NO SE
                    HAYAN INSTALADO Y VENGAN CON TODOS SUS PLASTICOS Y
                    COMPONENTES
                  </h6>
                </Box>

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
              <h2>Pantalla Complete para Iphone XS Negra PREMIUM</h2>

              <form>
                <Box className="other-details mt-4">
                  <h6 className="bolder">Color</h6>
                  <div className="color-grid">
                    <div className="color negro">
                      <input type="radio" name="color" id="negro" />
                      <label htmlFor="negro">Negro</label>
                    </div>
                    <div className="color red">
                      <input type="radio" name="color" id="red" />
                      <label htmlFor="red">(Product)Red</label>
                    </div>
                    <div className="color coral">
                      <input type="radio" name="color" id="coral" />
                      <label htmlFor="coral">Coral</label>
                    </div>
                    <div className="color azul">
                      <input type="radio" name="color" id="azul" />
                      <label htmlFor="azul">Azul</label>
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

                  <ul style={{ listStyle: "disc" }} className="mt-4 mb-4">
                    <li style={{ textAlign: "center", listStyle: "disc" }}>
                      La calidad PREMIUM es superior a la standard, mas brillo y
                      sensacion de uso mas parecida a la pantalla original
                    </li>
                  </ul>

                  <h1 className="mt-4 mb-4">299&euro;</h1>

                  <ul
                    className="list-con mt-3 mb-3"
                    style={{ listStyle: "disc" }}
                  >
                    <li style={{ listStyle: "disc" }}>
                      <h6 style={{ fontWeight: "bolder" }}>
                        ESTE PRODUCTO TIENE DESCUENTO AL COMPRAR 10 UNIDADES 0,
                        CAMBIA LA CANTIDAD EN CARRITO
                      </h6>
                    </li>
                  </ul>

                  <div className="submit-btn mt-5">
                    <button
                      type="submit"
                      style={{
                        width: "400px",
                        background: "#fc6c33",
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
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default PhoneDetails;
