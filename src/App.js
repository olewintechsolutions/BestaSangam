import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarMenu from './components/Navbar';
import Footer from './components/footer';
import Home from './components/Home';
import About from './pages/about';
import Community from './pages/community';
import Gallery from './pages/gallery';
import Contact from './pages/contact';
import Members from './pages/castlist';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CopyPage from './components/copy';
import Marriage from './pages/marriage';
import Policy from './pages/policy';
function App() {

  return (

    <Router>
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/community" element={<Community />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/members" element={<Members />} />
        <Route path="/marriage" element={<Marriage />} />
        <Route path="/privacy" element={<Policy />} />

      </Routes>
      
      <Footer />
      <CopyPage/>
    </Router>
  );
}


export default App;

