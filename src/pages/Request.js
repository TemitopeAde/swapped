import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import Header from "../components/Header";
import iph from "../images/mock.jpg";
import "./request.css";
import "./cellphones.css";
import sort from '../images/sort.png';
import filter from "../images/collections.png";
import Filter from "../components/Filter";


const Request = () => {
  const [showMore, setShowMore] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [showSize, setShowSize] = useState(false);
  const [showColor, setShowColor] = useState(false);
  const [showMobileFilter,setShowMobileFilter] = useState(false)
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

              <h6 className="mb-3">Fabricante</h6>

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

              {showMore && (
                <Box>
                  <div class="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Samsung
                    </label>
                  </div>
                </Box>
              )}

              {showMore === false ? (
                <button
                  style={{ background: "none", border: "none" }}
                  onClick={(e) => {
                    e.preventDefault();
                    setShowMore(!showMore);
                  }}
                >
                  mostrar más
                </button>
              ) : (
                <button
                  style={{ background: "none", border: "none" }}
                  onClick={(e) => {
                    e.preventDefault();
                    setShowMore(!showMore);
                  }}
                >
                  Muestra menos
                </button>
              )}
            </Box>

            <Box className="mt-2">
              <h6 className="mb-3">Modelo</h6>

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

              {showModel && (
                <Box>
                  <div class="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Iphone XR
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
                      Iphone XS Max
                    </label>
                  </div>
                </Box>
              )}

              {showModel === false ? (
                <button
                  style={{ background: "none", border: "none" }}
                  onClick={(e) => {
                    e.preventDefault();
                    setShowModel(!showModel);
                  }}
                >
                  mostrar más
                </button>
              ) : (
                <button
                  style={{ background: "none", border: "none" }}
                  onClick={(e) => {
                    e.preventDefault();
                    setShowModel(!showModel);
                  }}
                >
                  Muestra menos
                </button>
              )}
            </Box>

            <Box className="mb-5 mt-5">
              <h6 className="mb-3">Almacenamiento</h6>

              <div class="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  24GB
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
                  64GB
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
                  128GB
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
                  500GB
                </label>
              </div>

              {showSize && (
                <Box>
                  <div class="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      700GB
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
                      1TB
                    </label>
                  </div>
                </Box>
              )}

              {showSize === false ? (
                <button
                  style={{ background: "none", border: "none" }}
                  onClick={(e) => {
                    e.preventDefault();
                    setShowSize(!showSize);
                  }}
                >
                  mostrar más
                </button>
              ) : (
                <button
                  style={{ background: "none", border: "none" }}
                  onClick={(e) => {
                    e.preventDefault();
                    setShowSize(!showSize);
                  }}
                >
                  Muestra menos
                </button>
              )}
            </Box>

            <Box className="mb-5 mt-5">
              <h6 className="mb-3">Condición</h6>

              <div class="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  todos
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
                  excelente
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
                  bueno
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
                  justo
                </label>
              </div>
            </Box>

            <Box className="mb-5 mt-5">
              <h6 className="mb-3">Color</h6>

              <div class="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Rojo
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
                  negro
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
                  blanco
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
                  naranja
                </label>
              </div>
              {showColor && (
                <Box>
                  <div class="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Morado
                    </label>
                  </div>
                </Box>
              )}

              {showColor === false ? (
                <button
                  style={{ background: "none", border: "none" }}
                  onClick={(e) => {
                    e.preventDefault();
                    setShowColor(!showColor);
                  }}
                >
                  mostrar más
                </button>
              ) : (
                <button
                  style={{ background: "none", border: "none" }}
                  onClick={(e) => {
                    e.preventDefault();
                    setShowColor(!showColor);
                  }}
                >
                  Muestra menos
                </button>
              )}
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
              <h1 className="mb-5">REPUESTOS</h1>

              <Box
                style={{
                  display: "flex",
                  alignIalignItems: "center",
                  justifyContent: "space-between",
                  gap: "10px",
                  padding: "20px",
                }}
              >
                {/* <Box>
                  <button style={{ border: "none", background: "#fff" }}>
                    <img
                      src={menu}
                      style={{ width: "20px", height: "20px" }}
                      alt=""
                    />
                  </button>
                </Box> */}
                {/* <Box>
                  <button style={{ border: "none", background: "#fff" }}>
                    <img
                      src={half}
                      style={{ width: "20px", height: "20px" }}
                      alt=""
                    />
                  </button>
                </Box> */}
              </Box>
            </Box>

            <Box className="cellphone-grid">
              <Box className="shadow request-items p-4">
                <Box>
                  <h6>Pantalla Completa para Iphone XS Negra OEM</h6>
                </Box>

                <Box>
                  <h3 className="bolder">399€</h3>
                </Box>
                <Box className="repuestos-grid">
                  <Box>
                    <Stack
                      spacing={3}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div className="gray-circle"></div>
                      <h6>Nuevo</h6>
                    </Stack>
                  </Box>
                  <Box className="repuestos-grid-images">
                    <img src={iph} alt="" />
                    <img src={iph} alt="" />
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
              </Box>
              <Box className="shadow request-items p-4">
                <Box>
                  <h6>Pantalla Completa para Iphone XS Negra OEM</h6>
                </Box>

                <Box>
                  <h3 className="bolder">399€</h3>
                </Box>
                <Box className="repuestos-grid">
                  <Box>
                    <Stack
                      spacing={3}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div className="gray-circle"></div>
                      <h6>Nuevo</h6>
                    </Stack>
                  </Box>
                  <Box className="repuestos-grid-images">
                    <img src={iph} alt="" />
                    <img src={iph} alt="" />
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
              </Box>
              <Box className="shadow request-items p-4">
                <Box>
                  <h6>Pantalla Completa para Iphone XS Negra OEM</h6>
                </Box>

                <Box>
                  <h3 className="bolder">399€</h3>
                </Box>
                <Box className="repuestos-grid">
                  <Box>
                    <Stack
                      spacing={3}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div className="gray-circle"></div>
                      <h6>Nuevo</h6>
                    </Stack>
                  </Box>
                  <Box className="repuestos-grid-images">
                    <img src={iph} alt="" />
                    <img src={iph} alt="" />
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
              </Box>
              <Box className="shadow request-items p-4">
                <Box>
                  <h6>Pantalla Completa para Iphone XS Negra OEM</h6>
                </Box>

                <Box>
                  <h3 className="bolder">399€</h3>
                </Box>
                <Box className="repuestos-grid">
                  <Box>
                    <Stack
                      spacing={3}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div className="gray-circle"></div>
                      <h6>Nuevo</h6>
                    </Stack>
                  </Box>
                  <Box className="repuestos-grid-images">
                    <img src={iph} alt="" />
                    <img src={iph} alt="" />
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
              </Box>
              <Box className="shadow request-items p-4">
                <Box>
                  <h6>Pantalla Completa para Iphone XS Negra OEM</h6>
                </Box>

                <Box>
                  <h3 className="bolder">399€</h3>
                </Box>
                <Box className="repuestos-grid">
                  <Box>
                    <Stack
                      spacing={3}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div className="gray-circle"></div>
                      <h6>Nuevo</h6>
                    </Stack>
                  </Box>
                  <Box className="repuestos-grid-images">
                    <img src={iph} alt="" />
                    <img src={iph} alt="" />
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
              </Box>
              <Box className="shadow request-items p-4">
                <Box>
                  <h6>Pantalla Completa para Iphone XS Negra OEM</h6>
                </Box>

                <Box>
                  <h3 className="bolder">399€</h3>
                </Box>
                <Box className="repuestos-grid">
                  <Box>
                    <Stack
                      spacing={3}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div className="gray-circle"></div>
                      <h6>Nuevo</h6>
                    </Stack>
                  </Box>
                  <Box className="repuestos-grid-images">
                    <img src={iph} alt="" />
                    <img src={iph} alt="" />
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
              </Box>
              <Box className="shadow request-items p-4">
                <Box>
                  <h6>Pantalla Completa para Iphone XS Negra OEM</h6>
                </Box>

                <Box>
                  <h3 className="bolder">399€</h3>
                </Box>
                <Box className="repuestos-grid">
                  <Box>
                    <Stack
                      spacing={3}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div className="gray-circle"></div>
                      <h6>Nuevo</h6>
                    </Stack>
                  </Box>
                  <Box className="repuestos-grid-images">
                    <img src={iph} alt="" />
                    <img src={iph} alt="" />
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
              </Box>
              <Box className="shadow request-items p-4">
                <Box>
                  <h6>Pantalla Completa para Iphone XS Negra OEM</h6>
                </Box>

                <Box>
                  <h3 className="bolder">399€</h3>
                </Box>
                <Box className="repuestos-grid">
                  <Box>
                    <Stack
                      spacing={3}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div className="gray-circle"></div>
                      <h6>Nuevo</h6>
                    </Stack>
                  </Box>
                  <Box className="repuestos-grid-images">
                    <img src={iph} alt="" />
                    <img src={iph} alt="" />
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
              </Box>
              <Box className="shadow request-items p-4">
                <Box>
                  <h6>Pantalla Completa para Iphone XS Negra OEM</h6>
                </Box>

                <Box>
                  <h3 className="bolder">399€</h3>
                </Box>
                <Box className="repuestos-grid">
                  <Box>
                    <Stack
                      spacing={3}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div className="gray-circle"></div>
                      <h6>Nuevo</h6>
                    </Stack>
                  </Box>
                  <Box className="repuestos-grid-images">
                    <img src={iph} alt="" />
                    <img src={iph} alt="" />
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
              </Box>
              <Box className="shadow request-items p-4">
                <Box>
                  <h6>Pantalla Completa para Iphone XS Negra OEM</h6>
                </Box>

                <Box>
                  <h3 className="bolder">399€</h3>
                </Box>
                <Box className="repuestos-grid">
                  <Box>
                    <Stack
                      spacing={3}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div className="gray-circle"></div>
                      <h6>Nuevo</h6>
                    </Stack>
                  </Box>
                  <Box className="repuestos-grid-images">
                    <img src={iph} alt="" />
                    <img src={iph} alt="" />
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
              </Box>
              <Box className="shadow request-items p-4">
                <Box>
                  <h6>Pantalla Completa para Iphone XS Negra OEM</h6>
                </Box>

                <Box>
                  <h3 className="bolder">399€</h3>
                </Box>
                <Box className="repuestos-grid">
                  <Box>
                    <Stack
                      spacing={3}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div className="gray-circle"></div>
                      <h6>Nuevo</h6>
                    </Stack>
                  </Box>
                  <Box className="repuestos-grid-images">
                    <img src={iph} alt="" />
                    <img src={iph} alt="" />
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
              </Box>
              <Box className="shadow request-items p-4">
                <Box>
                  <h6>Pantalla Completa para Iphone XS Negra OEM</h6>
                </Box>

                <Box>
                  <h3 className="bolder">399€</h3>
                </Box>
                <Box className="repuestos-grid">
                  <Box>
                    <Stack
                      spacing={3}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div className="gray-circle"></div>
                      <h6>Nuevo</h6>
                    </Stack>
                  </Box>
                  <Box className="repuestos-grid-images">
                    <img src={iph} alt="" />
                    <img src={iph} alt="" />
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
              </Box>
              <Box className="shadow request-items p-4">
                <Box>
                  <h6>Pantalla Completa para Iphone XS Negra OEM</h6>
                </Box>

                <Box>
                  <h3 className="bolder">399€</h3>
                </Box>
                <Box className="repuestos-grid">
                  <Box>
                    <Stack
                      spacing={3}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div className="gray-circle"></div>
                      <h6>Nuevo</h6>
                    </Stack>
                  </Box>
                  <Box className="repuestos-grid-images">
                    <img src={iph} alt="" />
                    <img src={iph} alt="" />
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
              </Box>
              <Box className="shadow request-items p-4">
                <Box>
                  <h6>Pantalla Completa para Iphone XS Negra OEM</h6>
                </Box>

                <Box>
                  <h3 className="bolder">399€</h3>
                </Box>
                <Box className="repuestos-grid">
                  <Box>
                    <Stack
                      spacing={3}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div className="gray-circle"></div>
                      <h6>Nuevo</h6>
                    </Stack>
                  </Box>
                  <Box className="repuestos-grid-images">
                    <img src={iph} alt="" />
                    <img src={iph} alt="" />
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
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="filter-request-container shadow">
        <Box className="filter-request-flex">
          <Box>
            <button
              onClick={(e) => {
                e.preventDefault();
                setShowMobileFilter(true)
              }}
              style={{  background: "none", border: "none", fontSize: "24px" }}
            >
               <span style={{marginRight: '10px'}}>Filter</span>  
              <img
                style={{ width: "30px", height: "30px" }}
                src={filter}
                alt=""
              />
            </button>
          </Box>
          <Box>
          <button
              onClick={(e) => {
                e.preventDefault();
              }}
              style={{ background: "none", border: "none", fontSize: "24px" }}
            >
               <span style={{marginRight: '10px'}}>Sort By</span>  
              <img
                style={{ width: "30px", height: "30px" }}
                src={sort}
                alt=""
              />
            </button>
          </Box>
        </Box>
      </Box>

      

      <Box className="">
        <Filter showMobileFilter={showMobileFilter} setShowMobileFilter={setShowMobileFilter} />
      </Box>
    </Box>
  );
};

export default Request;
