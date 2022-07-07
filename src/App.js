import { Route, Routes } from "react-router-dom";
import TopOffers from "./pages/TopOffers";
import "./App.css";
import Home from "./pages/Home";
import CellPhones from "./pages/CellPhones";
import Phone from "./pages/Phone";
import "bootstrap/dist/css/bootstrap.min.css";
import Request from "./pages/Request";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/phone-details/:id" element={<Phone />}  />
        <Route path="/" element={<Home />} />
        <Route path="/top-offers" element={<TopOffers />} />
        <Route path="/cellphones" element={<CellPhones />} />
        <Route path="/repuestos" element={<Request />} />
      </Routes>
    </div>
  );
}

export default App;
