import { Route, Routes } from "react-router-dom";
import TopOffers from "./pages/TopOffers";
import "./App.css";
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
import BarApp from "./hist";
import SmartPhone from "./Mobile/SmartPhone";
import Macbook from "./Mobile/Macbook";
import Ipad from "./Mobile/Ipad";
import Informatica from "./Mobile/Informatica";
import Accesories from "./Mobile/Accessories";
import AppleWatch from "./Mobile/AppleWatch";
import Audio from "./Mobile/Audio";
import Collections from "./Mobile/Collection";
import Televisores from "./Mobile/Televisores";
import Tienda from "./Mobile/Tienda";

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
        <Route path="/hist" element={<BarApp />} />
        <Route path="/smart-phones" element={<SmartPhone />} />
        <Route path="/macbook" element={<Macbook />} />
        <Route path="/ipad-and-tablets" element={<Ipad />} />
        <Route path="/formatica-y-accesories" element={<Informatica />} />
        <Route path="/accessories" element={<Accesories />} />
        <Route path="/apple-watch" element={<AppleWatch />} />
        <Route path="/audio" element={<Audio />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/televisores" element={<Televisores />} />
        <Route path="/tienda" element={<Tienda />} />
      </Routes>
    </div>
  );
}

export default App;
