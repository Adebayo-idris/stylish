import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from './img/laedit.svg';
import image2 from './img/sfedit.svg';
import image3 from './img/P.jpg';
import "./Carousel.css"

const carousel = () => {
  return (
    <Carousel  id='edit'>
      <Carousel.Item interval={4000}   >
        <img  
         className="d-blok w-50 "
          src={image1}
          alt="First slide" 
          
        />
        <Carousel.Caption>
        {/* <p>New Era Los Angeles Dodgers Adjustable 9Fifty MLB Straight Brim Baseball Cap 950</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000} className="">
        <img
          className="d-blok w-50 "
          src={image2}
          alt="Third slide"
         
        />
        <Carousel.Caption>
     
          {/* <p>New Era 950 MLB Basic Team Color SAN Francisco Giants Snapback Cap</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000} >
        <img
         className="d-blok w-50 "
          src={image3}
          alt="Third slide"
         
        />
        <Carousel.Caption>
         
          {/* <p>New Era Pittsburgh Pirates MLB Basic Snapback Black on Black 950</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default carousel;