import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Components/navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";




const App = () => {
  return (
    <Router>
      <Navbar/>
      
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
  );
};

export default App;
