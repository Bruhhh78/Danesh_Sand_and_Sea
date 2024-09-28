import React from 'react'
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import "../App.css";
import Companies from "../components/Companies/Companies";
import Residencies from "../components/Residencies/Residencies";
import Values from "../components/Values/Values.jsx";
import Contact from "../components/Contact/Contact.jsx";
import GetStarted from "../components/GetStarted/GetStarted.jsx";
import Footer from "../components/Footer/Footer.jsx";

const Website = () => {
  return (
    <div className="App">
    <div>
      <div className="white-gradient" />
      <Header />
      <Hero />
    </div>
    <Companies />
    <Residencies />
    <Values />
    <Contact />
    <GetStarted />
    <Footer />
  </div>
  )
}

export default Website