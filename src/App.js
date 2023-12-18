import React from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { About } from "./Components/About/About";
import { Contacts } from "./Components/Contacts/Contacts";
import { Footer } from "./Components/Footer/Footer";
import CarouselComponent from "./Components/Carousel/CarouselComponent";

const App = () => {

  return (
    <div>
      <Navbar/>
      <CarouselComponent/>
      <About/>
      <Contacts/>
      <Footer/>
    </div>
  );
};

export default App;
