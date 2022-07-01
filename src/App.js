import React from 'react';
import Home from "./components/Home";
import About from "./components/About";
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
