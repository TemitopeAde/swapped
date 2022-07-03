import React from "react";
import Accesories from "./Sidebar/Accesories";
import AppleCorner from "./Sidebar/AppleCorner";
import AppleWatch from "./Sidebar/AppleWatch";
import Audio from "./Sidebar/Audio";
import BuyingGuides from "./Sidebar/BuyingGuides";
import Camera from "./Sidebar/Camera";
import CellPhones from "./Sidebar/CellPhones";
import Certified from "./Sidebar/Certified";
import Console from "./Sidebar/Console";
import GoodDeals from "./Sidebar/GoodDeals";
import HomeAppliances from "./Sidebar/HomeAppliances";
import Ipad from "./Sidebar/Ipad";
import Laptop from "./Sidebar/Laptop";
import "./sidebarcontent.css";
import { Box } from "@mui/material";
import close from "../images/close-black.png";

const SidebarContent = ({ show }) => {
  if (show === 1) {
    return (
      <Box>
        {/* <div style={{ position: "relative" }}>
          <button
            className="close-btn-content"
            style={{ background: "none", border: "none", outline: "none", position: 'absolute', right: '0px' }}
          >
            <img style={{ width: "35px", height: "35px" }} src={close} alt="" />
          </button>
        </div> */}

        
      </Box>
    );
  }

  if (show === 2) {
    return (
      <Box>
        <toggleClose />
      </Box>
    );
  }
  if (show === 3) {
    return (
      <Box>
        <toggleClose />
      </Box>
    );
  }
};

export default SidebarContent;
