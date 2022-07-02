import { Route, Routes } from "react-router-dom";
import TopOffers from "./pages/TopOffers";
import "./App.css";
import Home from "./pages/Home";


import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/top-offers" element={<TopOffers />} />
      </Routes>
    </div>
  );
}

export default App;
