import { Box, Stack } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import mac from "../images/macbook.png";
import "./section.css";
import ipad from "../images/ipad.png";
import iphone from "../images/ipho.png";
import watch from "../images/watch.png";
import airpod from "../images/pod.png";

const Section = () => {
  const navigate = useNavigate();
  return (
    <Box style={{ padding: "6rem 1rem", paddingBottom: "2.9rem" }}>
      <Box>
        <Box>
          <h3 style={{ marginBottom: "3rem" }}>Best selling</h3>

          <Box>
            <Splide
              options={{
                rewind: true,
                perPage: 4,
                gap: "1rem",
                type: "loop",
                isNavigation: false,
                perMove: 1,
                padding: "0.3rem 1rem",
                pagination: false,
                breakpoints: {
                  0: {
                    perPage: 1,
                    perMove: 1,
                  },
                  390: {
                    perPage: 1,
                    perMove: 1,
                  },
                  600: {
                    perPage: 1,
                    perMove: 1,
                  },
                  820: {
                    perPage: 2,
                    perMove: 2,
                  },
                  1247: {
                    perPage: 4,
                    perMove: 4,
                  },
                },
              }}
            >
              <SplideSlide>
                <Box
                  className="shadow2 text-center"
                  style={{ borderRadius: "10px" }}
                >
                  <Link
                    style={{ textDecoration: "none", color: "#000" }}
                    to="/"
                  >
                    <Stack sx={{ padding: "2rem" }}>
                      <button className="btn btn-dark">Bestseller</button>

                      <Box>
                        <img style={{ width: "100%" }} src={mac} alt="" />
                      </Box>

                      <Box>
                        <h5
                          style={{ fontWeight: "bold" }}
                          className="text-success"
                        >
                          MacBook Pro 16" (2020)
                        </h5>
                        <p style={{ opacity: ".7" }}>
                          Touch Bar - Retina - Core i7
                        </p>
                        <p>
                          {" "}
                          <span style={{ fontWeight: "bold" }}>
                            Warranty:
                          </span>{" "}
                          12 months
                        </p>
                      </Box>

                      <Box>
                        <h6>Starting from</h6>
                        <h3>
                          <s>#3,456</s>
                          <span style={{ marginLeft: "10px" }}>$1,345</span>
                        </h3>
                      </Box>
                    </Stack>
                  </Link>
                </Box>
              </SplideSlide>
              <SplideSlide>
                <Box
                  className="shadow2 text-center"
                  style={{ borderRadius: "10px" }}
                >
                  <Link
                    style={{ textDecoration: "none", color: "#000" }}
                    to="/"
                  >
                    <Stack sx={{ padding: "2rem" }}>
                      <button className="btn btn-dark">Bestseller</button>

                      <Box>
                        <img style={{ width: "100%" }} src={mac} alt="" />
                      </Box>

                      <Box>
                        <h5
                          style={{ fontWeight: "bold" }}
                          className="text-success"
                        >
                          MacBook Pro 16" (2020)
                        </h5>
                        <p style={{ opacity: ".7" }}>
                          Touch Bar - Retina - Core i7
                        </p>
                        <p>
                          {" "}
                          <span style={{ fontWeight: "bold" }}>
                            Warranty:
                          </span>{" "}
                          12 months
                        </p>
                      </Box>

                      <Box>
                        <h6>Starting from</h6>
                        <h3>
                          <s>#3,456</s>
                          <span style={{ marginLeft: "10px" }}>$1,345</span>
                        </h3>
                      </Box>
                    </Stack>
                  </Link>
                </Box>
              </SplideSlide>
              <SplideSlide>
                <Box
                  className="shadow2 text-center"
                  style={{ borderRadius: "10px" }}
                >
                  <Link
                    style={{ textDecoration: "none", color: "#000" }}
                    to="/"
                  >
                    <Stack sx={{ padding: "2rem" }}>
                      <button className="btn btn-dark">Bestseller</button>

                      <Box>
                        <img style={{ width: "100%" }} src={mac} alt="" />
                      </Box>

                      <Box>
                        <h5
                          style={{ fontWeight: "bold" }}
                          className="text-success"
                        >
                          MacBook Pro 16" (2020)
                        </h5>
                        <p style={{ opacity: ".7" }}>
                          Touch Bar - Retina - Core i7
                        </p>
                        <p>
                          {" "}
                          <span style={{ fontWeight: "bold" }}>
                            Warranty:
                          </span>{" "}
                          12 months
                        </p>
                      </Box>

                      <Box>
                        <h6>Starting from</h6>
                        <h3>
                          <s>#3,456</s>
                          <span style={{ marginLeft: "10px" }}>$1,345</span>
                        </h3>
                      </Box>
                    </Stack>
                  </Link>
                </Box>
              </SplideSlide>
              <SplideSlide>
                <Box
                  className="shadow2 text-center"
                  style={{ borderRadius: "10px" }}
                >
                  <Link
                    style={{ textDecoration: "none", color: "#000" }}
                    to="/"
                  >
                    <Stack sx={{ padding: "2rem" }}>
                      <button className="btn btn-dark">Bestseller</button>

                      <Box>
                        <img style={{ width: "100%" }} src={mac} alt="" />
                      </Box>

                      <Box>
                        <h5
                          style={{ fontWeight: "bold" }}
                          className="text-success"
                        >
                          MacBook Pro 16" (2020)
                        </h5>
                        <p style={{ opacity: ".7" }}>
                          Touch Bar - Retina - Core i7
                        </p>
                        <p>
                          {" "}
                          <span style={{ fontWeight: "bold" }}>
                            Warranty:
                          </span>{" "}
                          12 months
                        </p>
                      </Box>

                      <Box>
                        <h6>Starting from</h6>
                        <h3>
                          <s>#3,456</s>
                          <span style={{ marginLeft: "10px" }}>$1,345</span>
                        </h3>
                      </Box>
                    </Stack>
                  </Link>
                </Box>
              </SplideSlide>
              <SplideSlide>
                <Box
                  className="shadow2 text-center"
                  style={{ borderRadius: "10px" }}
                >
                  <Link
                    style={{ textDecoration: "none", color: "#000" }}
                    to="/"
                  >
                    <Stack sx={{ padding: "2rem" }}>
                      <button className="btn btn-dark">Bestseller</button>

                      <Box>
                        <img style={{ width: "100%" }} src={mac} alt="" />
                      </Box>

                      <Box>
                        <h5
                          style={{ fontWeight: "bold" }}
                          className="text-success"
                        >
                          MacBook Pro 16" (2020)
                        </h5>
                        <p style={{ opacity: ".7" }}>
                          Touch Bar - Retina - Core i7
                        </p>
                        <p>
                          {" "}
                          <span style={{ fontWeight: "bold" }}>
                            Warranty:
                          </span>{" "}
                          12 months
                        </p>
                      </Box>

                      <Box>
                        <h6>Starting from</h6>
                        <h3>
                          <s>#3,456</s>
                          <span style={{ marginLeft: "10px" }}>$1,345</span>
                        </h3>
                      </Box>
                    </Stack>
                  </Link>
                </Box>
              </SplideSlide>
              <SplideSlide>
                <Box
                  className="shadow2 text-center"
                  style={{ borderRadius: "10px" }}
                >
                  <Link
                    style={{ textDecoration: "none", color: "#000" }}
                    to="/"
                  >
                    <Stack sx={{ padding: "2rem" }}>
                      <button className="btn btn-dark">Bestseller</button>

                      <Box>
                        <img style={{ width: "100%" }} src={mac} alt="" />
                      </Box>

                      <Box>
                        <h5
                          style={{ fontWeight: "bold" }}
                          className="text-success"
                        >
                          MacBook Pro 16" (2020)
                        </h5>
                        <p style={{ opacity: ".7" }}>
                          Touch Bar - Retina - Core i7
                        </p>
                        <p>
                          {" "}
                          <span style={{ fontWeight: "bold" }}>
                            Warranty:
                          </span>{" "}
                          12 months
                        </p>
                      </Box>

                      <Box>
                        <h6>Starting from</h6>
                        <h3>
                          <s>#3,456</s>
                          <span style={{ marginLeft: "10px" }}>$1,345</span>
                        </h3>
                      </Box>
                    </Stack>
                  </Link>
                </Box>
              </SplideSlide>
              <SplideSlide>
                <Box
                  className="shadow2 text-center"
                  style={{ borderRadius: "10px" }}
                >
                  <Link
                    style={{ textDecoration: "none", color: "#000" }}
                    to="/"
                  >
                    <Stack sx={{ padding: "2rem" }}>
                      <button className="btn btn-dark">Bestseller</button>

                      <Box>
                        <img style={{ width: "100%" }} src={mac} alt="" />
                      </Box>

                      <Box>
                        <h5
                          style={{ fontWeight: "bold" }}
                          className="text-success"
                        >
                          MacBook Pro 16" (2020)
                        </h5>
                        <p style={{ opacity: ".7" }}>
                          Touch Bar - Retina - Core i7
                        </p>
                        <p>
                          {" "}
                          <span style={{ fontWeight: "bold" }}>
                            Warranty:
                          </span>{" "}
                          12 months
                        </p>
                      </Box>

                      <Box>
                        <h6>Starting from</h6>
                        <h3>
                          <s>#3,456</s>
                          <span style={{ marginLeft: "10px" }}>$1,345</span>
                        </h3>
                      </Box>
                    </Stack>
                  </Link>
                </Box>
              </SplideSlide>
              <SplideSlide>
                <Box
                  className="shadow2 text-center"
                  style={{ borderRadius: "10px" }}
                >
                  <Link
                    style={{ textDecoration: "none", color: "#000" }}
                    to="/"
                  >
                    <Stack sx={{ padding: "2rem" }}>
                      <button className="btn btn-dark">Bestseller</button>

                      <Box>
                        <img style={{ width: "100%" }} src={mac} alt="" />
                      </Box>

                      <Box>
                        <h5
                          style={{ fontWeight: "bold" }}
                          className="text-success"
                        >
                          MacBook Pro 16" (2020)
                        </h5>
                        <p style={{ opacity: ".7" }}>
                          Touch Bar - Retina - Core i7
                        </p>
                        <p>
                          {" "}
                          <span style={{ fontWeight: "bold" }}>
                            Warranty:
                          </span>{" "}
                          12 months
                        </p>
                      </Box>

                      <Box>
                        <h6>Starting from</h6>
                        <h3>
                          <s>#3,456</s>
                          <span style={{ marginLeft: "10px" }}>$1,345</span>
                        </h3>
                      </Box>
                    </Stack>
                  </Link>
                </Box>
              </SplideSlide>
              <SplideSlide>
                <Box
                  className="shadow2 text-center"
                  style={{ borderRadius: "10px" }}
                >
                  <Link
                    style={{ textDecoration: "none", color: "#000" }}
                    to="/"
                  >
                    <Stack sx={{ padding: "2rem" }}>
                      <button className="btn btn-dark">Bestseller</button>

                      <Box>
                        <img style={{ width: "100%" }} src={mac} alt="" />
                      </Box>

                      <Box>
                        <h5
                          style={{ fontWeight: "bold" }}
                          className="text-success"
                        >
                          MacBook Pro 16" (2020)
                        </h5>
                        <p style={{ opacity: ".7" }}>
                          Touch Bar - Retina - Core i7
                        </p>
                        <p>
                          {" "}
                          <span style={{ fontWeight: "bold" }}>
                            Warranty:
                          </span>{" "}
                          12 months
                        </p>
                      </Box>

                      <Box>
                        <h6>Starting from</h6>
                        <h3>
                          <s>#3,456</s>
                          <span style={{ marginLeft: "10px" }}>$1,345</span>
                        </h3>
                      </Box>
                    </Stack>
                  </Link>
                </Box>
              </SplideSlide>
              <SplideSlide>
                <Box
                  className="shadow2 text-center"
                  style={{ borderRadius: "10px" }}
                >
                  <Link
                    style={{ textDecoration: "none", color: "#000" }}
                    to="/"
                  >
                    <Stack sx={{ padding: "2rem" }}>
                      <button className="btn btn-dark">Bestseller</button>

                      <Box>
                        <img style={{ width: "100%" }} src={mac} alt="" />
                      </Box>

                      <Box>
                        <h5
                          style={{ fontWeight: "bold" }}
                          className="text-success"
                        >
                          MacBook Pro 16" (2020)
                        </h5>
                        <p style={{ opacity: ".7" }}>
                          Touch Bar - Retina - Core i7
                        </p>
                        <p>
                          {" "}
                          <span style={{ fontWeight: "bold" }}>
                            Warranty:
                          </span>{" "}
                          12 months
                        </p>
                      </Box>

                      <Box>
                        <h6>Starting from</h6>
                        <h3>
                          <s>#3,456</s>
                          <span style={{ marginLeft: "10px" }}>$1,345</span>
                        </h3>
                      </Box>
                    </Stack>
                  </Link>
                </Box>
              </SplideSlide>
            </Splide>
          </Box>
        </Box>

        <Box className="mt-5">
          <Box className="heavy-weights">
            <h3 style={{ marginBottom: "3rem", marginTop: '5rem' }}>The heavyweights</h3>

            <Box className="heavy-weights-grid">
              <Box
                onClick={() => navigate("/blog")}
                style={{ cursor: "pointer" }}
                className="one"
              >
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                  }}
                >
                  <img src={ipad} alt="" />
                  <h3>iPad</h3>
                  <p>Distract your kid (or yourself) for up to 40% off</p>
                </Box>
              </Box>
              <Box
                onClick={() => navigate("/blog")}
                style={{ cursor: "pointer" }}
                className="two"
              >
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                  }}
                >
                  <img src={iphone} alt="" />
                  <h3>iPhone</h3>
                  <p>Think Different — But Not Too Different</p>
                </Box>
              </Box>
              <Box
                onClick={() => navigate("/blog")}
                style={{ cursor: "pointer" }}
                className="three"
              >
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                  }}
                >
                  <img src={airpod} alt="airpod" />
                  <h3>AirPods & Earphones</h3>
                  <p>Distract your kid (or yourself) for up to 40% off</p>
                </Box>
              </Box>
              <Box
                onClick={() => navigate("/blog")}
                style={{ cursor: "pointer" }}
                className="four"
              >
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                  }}
                >
                  <img src={watch} alt="" />
                  <h3>Apple watch</h3>
                  <p>The future of health is on your wrist</p>
                </Box>
              </Box>
              <Box
                onClick={() => navigate("/blog")}
                style={{ cursor: "pointer" }}
                className="five"
              >
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                  }}
                >
                  <img src={mac} alt="" />
                  <h3>MacBook</h3>
                  <p>All ages. All races. All sexes</p>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Section;
