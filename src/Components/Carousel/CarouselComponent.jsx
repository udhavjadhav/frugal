import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
function CarouselComponent() {
  return (
    <Carousel className="car" data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="carousel d-block w-100"
          src="/assets/car1.png"
          alt="Second-slide"
        />
        {/* <Carousel.Caption style={{ color: "white" }}>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel d-block w-100"
          src="/assets/car2.png"
          alt="Second-slide"
        />
        {/* <Carousel.Caption style={{ color: "white" }}>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item> 
        <img
          className="carousel d-block w-100"
          src="/assets/car3.png"
          alt="Third-slide"
        />
        {/* <Carousel.Caption style={{ color: "white" }}>
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item> 
        <img
          className="carousel d-block w-100"
          src="/assets/car4.png"
          alt="Third-slide"
        />
        {/* <Carousel.Caption style={{ color: "white" }}>
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
