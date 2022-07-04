import { Route, Routes } from "react-router-dom";
import TopOffers from "./pages/TopOffers";
import "./App.css";
import Home from "./pages/Home";
import CellPhones from "./pages/CellPhones";
import Phone from "./pages/Phone";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/phone-details" element={<Phone />}  />
        <Route path="/" element={<Home />} />
        <Route path="/top-offers" element={<TopOffers />} />
        <Route path="/cellphones" element={<CellPhones />} />
      </Routes>
    </div>
  );
}

export default App;
