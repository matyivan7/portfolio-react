import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";
import Services from "./components/Services.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import './App.css'

function App() {
  return (
      <div className="font-sans">
          <Navbar />

          <Hero />
          <Contact />
          <Services />
          <About />
          {/* <Projects /> */}

          <Footer />
      </div>
  )
}

export default App
