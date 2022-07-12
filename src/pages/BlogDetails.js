import { Box } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import "./blog.css";
import back from "../images/back.png";
import { Link } from "react-router-dom";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const BlogDetails = () => {
  return (
    <Box>
      <Header />
      <Box>
        <Box>
          <Box className="blog-details-container">
            <Box className="blog-details-one">
              <h3 style={{ textAlign: "left" }} className="mb-4">
                Example of Blog Post
              </h3>

              <Link className="back-btn" to="/blog">
                <Box sx={{ position: "relative" }}>
                  <Box sx={{ position: "absolute" }}>
                    <h4
                      style={{
                        textAlign: "left",
                        color: "#fff",
                        width: "140px",
                        background: "orangered",
                        padding: ".4rem .5rem",
                        borderRadius: "7px",
                      }}
                    >
                      BACK
                    </h4>
                  </Box>
                  <Box
                    sx={{ position: "absolute", left: "120px", top: "-4px" }}
                    className="p-1"
                    style={{
                      borderRadius: "100%",
                      border: "3px solid orangered",
                      width: "50px",
                      height: "50px",
                      background: "#fff",
                    }}
                  >
                    <img
                      src={back}
                      alt=""
                      style={{ width: "36px", height: "36px" }}
                    />
                  </Box>
                </Box>
              </Link>

              <Box className="share-post-container">
                <h6 className="mb-3">Compartir</h6>
                <Box className="share-post-flex">
                  <Link to="/">
                    <BsTwitter />
                  </Link>
                  <Link to="/">
                    <FaFacebookF />
                  </Link>
                  <Link to="/">
                    <FaLinkedinIn />
                  </Link>
                </Box>
              </Box>
            </Box>




            <Box>
              <h3>Protegelo</h3>

              <p>
                reprehenderit illum consequuntur facere iure non ipsa unde earum
                labore quas nulla voluptate veniam sed delectus fugit aut
                perspiciatis totam qui excepturi, placeat aspernatur quia ipsum
                reiciendis magni. Quas, doloribus vero beatae dignissimos ipsam
                assumenda quae suscipit optio rem fugiat veniam totam Adipisci
                laudantium illum blanditiis obcaecati ad nemo sequi in
                voluptatibus dolore.
              </p>

              <h3>Protegelo</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
                itaque quae error ipsum, praesentium dolore atque harum suscipit
                voluptas ipsa.
              </p>

              <h3 className="mt-4">Mantenlo fresquito</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
                itaque quae error ipsum, praesentium dolore atque harum suscipit
                voluptas ipsa. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Facere iste, repudiandae natus, sint
                consectetur ad voluptas tempore nulla voluptatibus quaerat
                asperiores, repellat veniam.
              </p>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BlogDetails;
