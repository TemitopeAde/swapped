import { Box } from "@mui/material";
import React from "react";
import close from "../images/close-black.png";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import "./filtermobile.css";

const Filter = ({ setShowMobileFilter, showMobileFilter }) => {
  if (showMobileFilter) {
    return (
      <Box className="py-3 filter-container mobile-filter">
        <Box
          className="p-2"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <button
              onClick={(e) => {
                e.preventDefault();
                setShowMobileFilter(false)
              }}
              style={{ background: "none", border: "none" }}
            >
              <img
                style={{ height: "30px", width: "30px" }}
                src={close}
                alt=""
              />
            </button>
          </Box>
          <Box>
            <h3 style={{ margin: "0" }}>Filter</h3>
          </Box>
          <Box>
            <button className="btn btn-dark">Clear</button>
          </Box>
        </Box>

        <Box className="mt-5">
          <ul>
            <li>
              <Link to="/">
                <div
                  className="filter-list"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h3>Fabricante</h3>
                  <IoIosArrowForward />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/">
                <div
                  className="filter-list"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h3>Modelo</h3>
                  <IoIosArrowForward />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/">
                <div
                  className="filter-list"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h3>Almacenamiento</h3>
                  <IoIosArrowForward />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/">
                <div
                  className="filter-list"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h3>Condición</h3>
                  <IoIosArrowForward />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/">
                <div
                  className="filter-list"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h3>Color</h3>
                  <IoIosArrowForward />
                </div>
              </Link>
            </li>
          </ul>
        </Box>
      </Box>
    );
  }
};

export default Filter;
