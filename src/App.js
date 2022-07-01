import React from 'react'
import { BrowserRouter as Router,  Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import NavBar from './components/NavBar';
import SocialLinks from './components/SocialLinks';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';


const App = () => {
  return (
    <>
    <NavBar />
    <Home/>
    <SocialLinks />
    <About/>
    <Portfolio/>
    <Experience />
    <ContactUs/>
    </>
  );
};

export default App;
