import "./Carousel.css";

import React from "react";

import Projects from "../../pages/Projects/Projects";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";

const Carousel = () => {
  return (
    <section id="portfolio" className="carousel carousel-slider center">
      <div id="projects" className="carousel-item" href="#one!">
        <Projects />
      </div>
      <div id="about" className="carousel-item" href="#two!">
        <About />
      </div>
      <div id="contact" className="carousel-item" href="#three!">
        <Contact />
      </div>
    </section>
  );
};

export default Carousel;
