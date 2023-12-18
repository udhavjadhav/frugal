import React from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import "./App.css";
import { Contacts } from "./Components/Contacts/Contacts";
import { Footer } from "./Components/Footer/Footer";
import CarouselComponent from "./Components/Carousel/CarouselComponent";

const App = () => {

  return (
    <div>
      <Navbar/>
      <CarouselComponent/>
      <Contacts/>
      <Footer/>
    </div>
  );
};

export default App;
