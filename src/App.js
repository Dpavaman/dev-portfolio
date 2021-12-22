import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import About from "./components/About";
import Card from "./components/Card";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

function App() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  });
  return (
    <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
      <div data-aos="fade-down" data-aos-duration="1000">
        <Card />
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
        <About />
      </div>
      <Skills />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
