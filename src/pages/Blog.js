import React from "react";
import "./blog.css";
import { Box } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";


const Blog = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Header />
      <Box className="blog-container-grid">
        <Box className="blog-container-flex shadow p-4">
          <img
            src="https://neilpatel.com/wp-content/uploads/2017/09/blog-post-image-guide.jpg"
            alt=""
          />
          <button className="blog-subtitle btn btn-danger" style={{ border: "none" }}>
            Un equipazo
          </button>
          <h2 style={{ fontSize: "1.5rem" }} className="mt-1 mb-1">
            Quien vende en Back Market
          </h2>
          <Box className="blog-time-min-flex">
            <p className="blog-time">4 Diciembre 2019</p>
            <p>5 mins delectura</p>
          </Box>
          <button
            onClick={() => navigate("/blogdetails/2")}
            className="btn btn-success"
          >
            More info
          </button>
        </Box>
        <Box className="blog-container-flex shadow p-4">
          <img
            src="https://neilpatel.com/wp-content/uploads/2017/09/blog-post-image-guide.jpg"
            alt=""
          />
          <button className="blog-subtitle" style={{ border: "none" }}>
            Un equipazo
          </button>
          <h2 style={{ fontSize: "1.5rem" }} className="mt-1 mb-1">
            Quien vende en Back Market
          </h2>
          <Box className="blog-time-min-flex">
            <p className="blog-time">4 Diciembre 2019</p>
            <p>5 mins delectura</p>
          </Box>
          <button className="btn btn-success">More info</button>
        </Box>
        <Box className="blog-container-flex shadow p-4">
          <img
            src="https://neilpatel.com/wp-content/uploads/2017/09/blog-post-image-guide.jpg"
            alt=""
          />
          <button className="blog-subtitle" style={{ border: "none" }}>
            Un equipazo
          </button>
          <h2 style={{ fontSize: "1.5rem" }} className="mt-1 mb-1">
            Quien vende en Back Market
          </h2>
          <Box className="blog-time-min-flex">
            <p className="blog-time">4 Diciembre 2019</p>
            <p>5 mins delectura</p>
          </Box>
          <button
            onClick={() => navigate("/blogdetails/2")}
            className="btn btn-success"
          >
            More info
          </button>
        </Box>
        <Box className="blog-container-flex shadow p-4">
          <img
            src="https://neilpatel.com/wp-content/uploads/2017/09/blog-post-image-guide.jpg"
            alt=""
          />
          <button className="blog-subtitle" style={{ border: "none" }}>
            Un equipazo
          </button>
          <h2 style={{ fontSize: "1.5rem" }} className="mt-1 mb-1">
            Quien vende en Back Market
          </h2>
          <Box className="blog-time-min-flex">
            <p className="blog-time">4 Diciembre 2019</p>
            <p>5 mins delectura</p>
          </Box>
          <button className="btn btn-success">More info</button>
        </Box>
        <Box className="blog-container-flex shadow p-4">
          <img
            src="https://neilpatel.com/wp-content/uploads/2017/09/blog-post-image-guide.jpg"
            alt=""
          />
          <button className="blog-subtitle btn btn-danger" style={{ border: "none" }}>
            Un equipazo
          </button>
          <h2 style={{ fontSize: "1.5rem" }} className="mt-1 mb-1">
            Quien vende en Back Market
          </h2>
          <Box className="blog-time-min-flex">
            <p className="blog-time">4 Diciembre 2019</p>
            <p>5 mins delectura</p>
          </Box>
          <button
            onClick={() => navigate("/blogdetails/2")}
            className="btn btn-success"
          >
            More info
          </button>
        </Box>
        <Box className="blog-container-flex shadow p-4">
          <img
            src="https://neilpatel.com/wp-content/uploads/2017/09/blog-post-image-guide.jpg"
            alt=""
          />
          <button className="blog-subtitle" style={{ border: "none" }}>
            Un equipazo
          </button>
          <h2 style={{ fontSize: "1.5rem" }} className="mt-1 mb-1">
            Quien vende en Back Market
          </h2>
          <Box className="blog-time-min-flex">
            <p className="blog-time">4 Diciembre 2019</p>
            <p>5 mins delectura</p>
          </Box>
          <button
            onClick={() => navigate("/blogdetails/2")}
            className="btn btn-success"
          >
            More info
          </button>
        </Box>
        <Box className="blog-container-flex shadow p-4">
          <img
            src="https://neilpatel.com/wp-content/uploads/2017/09/blog-post-image-guide.jpg"
            alt=""
          />
          <button className="blog-subtitle" style={{ border: "none" }}>
            Un equipazo
          </button>
          <h2 style={{ fontSize: "1.5rem" }} className="mt-1 mb-1">
            Quien vende en Back Market
          </h2>
          <Box className="blog-time-min-flex">
            <p className="blog-time">4 Diciembre 2019</p>
            <p>5 mins delectura</p>
          </Box>
          <button
            className="btn btn-success"
            onClick={() => navigate("/blogdetails/2")}
          >
            More info
          </button>
        </Box>
        <Box className="blog-container-flex shadow p-4">
          <img
            src="https://neilpatel.com/wp-content/uploads/2017/09/blog-post-image-guide.jpg"
            alt=""
          />
          <button className="blog-subtitle btn btn-danger" style={{ border: "none" }}>
            Un equipazo
          </button>
          <h2 style={{ fontSize: "1.5rem" }} className="mt-1 mb-1">
            Quien vende en Back Market
          </h2>
          <Box className="blog-time-min-flex">
            <p className="blog-time">4 Diciembre 2019</p>
            <p>5 mins delectura</p>
          </Box>
          <button
            className="btn btn-success"
            onClick={() => navigate("/blogdetails/2")}
          >
            More info
          </button>
        </Box>
        <Box className="blog-container-flex shadow p-4">
          <img
            src="https://neilpatel.com/wp-content/uploads/2017/09/blog-post-image-guide.jpg"
            alt=""
          />
          <button className="blog-subtitle" style={{ border: "none" }}>
            Un equipazo
          </button>
          <h2 style={{ fontSize: "1.5rem" }} className="mt-1 mb-1">
            Quien vende en Back Market
          </h2>
          <Box className="blog-time-min-flex">
            <p className="blog-time">4 Diciembre 2019</p>
            <p>5 mins delectura</p>
          </Box>
          <button className="btn btn-success">More info</button>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default Blog;
