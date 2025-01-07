import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import CustomNavbar from './components/Navbar/CustomNavbar.jsx';
import Home from './pages/Home.jsx';
import Footer from './components/Footer/Footer.jsx';
import Signin from './pages/Signin.js';

const App = () => {
  return (
    <Router>
      <Header />
      <CustomNavbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<Signin/>} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
