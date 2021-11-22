import React from "react";
import"../Style/Carousel.css";

import {Carousel} from 'react-bootstrap';
function Crousel() {
  return (
    <Carousel indicators={false}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 img-style"
          src="https://wallpapercave.com/wp/wp2003951.jpg"
          alt="First slide"
        />
         <Carousel.Caption className="Carousel-text">
      <h3>Welcome to the a worldwide travel diary</h3>
      {/* <p>Welcome to the your personal tour guide</p> */}
    </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 img-style"
          src="https://images.hdqwalls.com/download/travel-hd-2560x1440.jpg"
          alt="Second slide"
        />
         <Carousel.Caption className="Carousel-text">
      <h3>Contribute in making travel easy</h3>
      {/* <p>Join us in the making of a world full of greenry , doante your time to plant a tree or donate your money to promote plantation .</p> */}
    </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 img-style"
          src="https://www.teahub.io/photos/full/60-605278_2560x1440-free-download-travel-wallpaper-in-hd-travel.jpg"
          alt="Third slide"
        /> 
        <Carousel.Caption className="Carousel-text">
        <h3>Get to know about any place in the world</h3>
        {/* <p>Planter can plant and donar can donate. Easy for people to contribute in the well being for our nature mother</p> */}
      </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Crousel;
