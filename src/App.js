import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Carousel } from 'react-bootstrap'
// import Carousel from 'react-bootstrap/Carousel'
// import banner1 from '../src/assets/banner_1.jpg'
// import banner2 from '../src/assets/banner_2.jpg'
// import banner3 from '../src/assets/banner_3.jpg'
// import  Navbar  from 'react-bootstrap/Navbar'
// import  Container  from 'react-bootstrap/Container'
// import NavDropdown from 'react-bootstrap/NavDropdown'
// import Nav from 'react-bootstrap/Nav'
import './App.css'
import Navigation from './components/Navigation'
import Slider from './components/Slider'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer';
import Products from './components/Products';
import Bcard from './components/Bcard';



// import 'bootstrap/dist/css/bootstrap.min.css'



const App = () => {
  return (
    <div className="App">
      {/* Navbar */}
      <Navigation />

      {/* Carousel */}
      <Slider />

      {/* Products */}
      <Products />


      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
