import React from "react";
import Accesories from './Sidebar/Accesories';
import AppleCorner from './Sidebar/AppleCorner';
import AppleWatch from './Sidebar/AppleWatch';
import Audio from './Sidebar/Audio';
import BuyingGuides from './Sidebar/BuyingGuides';
import Camera from './Sidebar/Camera';
import CellPhones from './Sidebar/CellPhones';
import Certified from './Sidebar/Certified';
import Console from './Sidebar/Console';
import GoodDeals from './Sidebar/GoodDeals';
import HomeAppliances from './Sidebar/HomeAppliances';
import Ipad from './Sidebar/Ipad';
import Laptop from './Sidebar/Laptop';





const SidebarContent = ({ show }) => {
    console.log(show)
  if (show === 1) {
    return (
      <div>
        <h1>One cursor</h1>
      </div>
    );
  }

  if (show === 2) {
    return (
      <div>
        <h1 style={{color: 'black'}}>two cursor</h1>
      </div>
    );
  }
  if (show === 3) {
    return (
      <div>
        <h1 style={{color: 'black'}}>three cursor</h1>
      </div>
    );
  }
};

export default SidebarContent;
