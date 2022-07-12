import React from "react";
import Header from "../components/Header";
import { Box } from "@mui/material";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Footer from '../components/Footer';

const Home = () => {
  return (
    <Box>
      <Header />

      <Hero />

      <Section />
      
      <Footer />
    </Box>
  );
};

export default Home;
