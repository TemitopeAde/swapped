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
      </Routes>
    </div>
  );
}

export default App;
