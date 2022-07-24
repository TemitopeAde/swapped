import React from "react";
import "./footer.css";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isBottom, setIsBottom] = React.useState(false);

  const handleScroll = () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;

    if (bottom) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  };

  React.useEffect(() => {
    if (window.innerWidth >= 820) {
      window.addEventListener("scroll", handleScroll, {
        passive: true,
      });

      // console.log("big")

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div className={isBottom ? "footer-fixed" : "hideFooter"}>
      <Box className="footer-flex-page">
        <Box>
          <ul>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/cookie-policy">Cookie Policy</Link>
            </li>
            <li>
              <Link to="/auction-policy">Auction Policy</Link>
            </li>
            <li>
              <Link to="/website-use-terms">Website Terms of Use</Link>
            </li>
            <li>
              <Link to="/sales-terms-and-conditions">Sale Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/preguntas">Preguntas Frecuentes</Link>
            </li>
            <li>
              <Link to="/contact-us">Contacto</Link>
            </li>
          </ul>
        </Box>
        <Box>
          <p style={{fontSize: '0.8rem'}}>Copyright www.reswapped.com</p>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
