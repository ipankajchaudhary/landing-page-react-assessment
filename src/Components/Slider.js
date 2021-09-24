// import { Carousel } from 'bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import React, { useState } from 'react'
import img1 from './nokia-laptop.png'
import img2 from './laptop-img-2.png'


const Slider = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} fade="true">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    )
}

export default Slider
