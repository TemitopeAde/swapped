import { Route, Routes } from "react-router-dom";
import TopOffers from "./pages/TopOffers";
import "./App.css";
import Home from "./pages/Home";
import CellPhones from "./pages/CellPhones";
import Phone from "./pages/Phone";
import "bootstrap/dist/css/bootstrap.min.css";
import Request from "./pages/Request";
import PhoneDetails from "./pages/PhoneDetails";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Landing from "./pages/Landing";
import SalesTerm from "./pages/SalesTerm";
import Privacy from "./pages/Privacy";
import Auction from "./pages/Auction";
import Website from "./pages/WebsiteTerms";
import Preguntas from "./pages/Preguntas";
import Cookie from "./pages/Cookie";
import ContactUs from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/smartphones/:id" element={<Phone />} />
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/top-offers" element={<TopOffers />} />
        <Route path="/smartphones" element={<CellPhones />} />
        <Route path="/repuestos" element={<Request />} />
        <Route path="/smart-phones/:id" element={<PhoneDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="blogdetails/:id" element={<BlogDetails />} />
        <Route path="/" element={<Landing />} />
        <Route path="/sales-terms-and-conditions" element={<SalesTerm />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/auction-policy" element={<Auction />} />
        <Route path="/website-use-terms" element={<Website />} />
        <Route path="/preguntas" element={<Preguntas />} />
        <Route path="/cookie-policy" element={<Cookie />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
