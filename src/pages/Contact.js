import { Box } from "@mui/material";
import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import RangeSlider from "../hist/RangeSlider";
import './contact.css';


const ContactUs = () => {
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <Header />
      <Box
        padding={{ xs: 2, md: 3, lg: 4 }}
        className="mt-5 contact-form-container shadow mb-5"
        sx={{ margin: "0 auto" }}
      >
        <Box component="form">
          <h6 style={{ fontSize: "1.6rem" }} className="mt-4 mb-4 text-center">
            Send us a Message
          </h6>
          <Box padding="1rem">
            <form>
              <label htmlFor="contact-name">Name</label>
              <input type="text" className="form-control" id="contact-name" />

              <label className="mt-4" htmlFor="contact-email">
                Email
              </label>
              <input type="eamil" className="form-control" id="contact-name" />

              <label htmlFor="textarea" className="mt-4" id="">
                Message
              </label>
              <textarea
                className="form-control"
                id="textarea"
                cols="30"
                rows="5"
              ></textarea>

              <button type="submit" className="mt-5 btn btn-success">
                Submit
              </button>
            </form>
          </Box>
        </Box>
      </Box>
      
      <Footer />
    </Box>
  );
};

export default ContactUs;
