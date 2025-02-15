import React from "react";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/NavItems/AboutUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ServicesPage from "./Components/NavItems/Services";
import CareersPage from "./Components/NavItems/Careers";
import ContactUs from "./Components/NavItems/ContactUs";
import Navbar from "./Components/Navbar";
import Challenge from "./Components/Home/Challange";
import AthletesCarousel from "./Components/Home/Athlete";


function App() {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Challenge/>
                <AthletesCarousel/>
              </>
            }
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;