import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";


function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<><Home /></>} />
          </Routes>

          <Routes>
            <Route path="/login" element={<><Login /></>} />
          </Routes>

          <Routes>
            <Route path="/register" element={<> <Register /> </>} /> 
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
