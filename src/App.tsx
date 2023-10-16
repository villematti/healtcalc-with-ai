import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import BMICalculator from './components/bmiCalculator/BMICalculator';
import WhatIsBMI from './components/whatIsBMI/WhatIsBMI';
import AboutUs from './components/aboutUs/AboutUs';
import './App.css'; // assuming you have a CSS file for general app styles

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="navbar">
          <NavLink to="/" className={isActive => isActive ? "nav-link active" : "nav-link"} end>
            Home
          </NavLink>
          <NavLink to="/what-is-bmi" className={isActive => isActive ? "nav-link active" : "nav-link"}>
            What is BMI?
          </NavLink>
          <NavLink to="/about-us" className={isActive => isActive ? "nav-link active" : "nav-link"}>
            About Us
          </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<BMICalculator />} />
          <Route path="/what-is-bmi" element={<WhatIsBMI />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
