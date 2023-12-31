import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../global.css";
function CarouselComponent() {
  return (
    <Carousel className="carousel-container" data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="carousel-img d-block w-100"
          src="/assets/car1.png"
          alt="Second-slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-img d-block w-100"
          src="/assets/car2.png"
          alt="Second-slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-img d-block w-100"
          src="/assets/car3.png"
          alt="Third-slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-img d-block w-100"
          src="/assets/car4.png"
          alt="Third-slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
