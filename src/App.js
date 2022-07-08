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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/phone-details/:id" element={<Phone />} />
        <Route path="/" element={<Home />} />
        <Route path="/top-offers" element={<TopOffers />} />
        <Route path="/cellphones" element={<CellPhones />} />
        <Route path="/repuestos" element={<Request />} />
        <Route path="/phone-detail/:id" element={<PhoneDetails />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
