import React, { useRef } from "react";
import "./global.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { About } from "./Components/About/About";
// import { Contacts } from "./Components/Contacts/Contacts";
import { Footer } from "./Components/Footer/Footer";
import CarouselComponent from "./Components/Carousel/CarouselComponent";

const App = () => {
  const aboutRef = useRef(null);
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const yOffset = aboutSection.getBoundingClientRect().top;
      const y = window.scrollY + yOffset;
      window.scroll({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <Navbar scrollToAbout={scrollToAbout} />
      <CarouselComponent />
      <div ref={aboutRef}>
        <About />
      </div>
      {/* <Contacts /> */}
      <Footer />
    </div>
  );
};

export default App;
