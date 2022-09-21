import React from 'react'
import i from '../assets/1.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
var Carousel = require('react-responsive-carousel').Carousel;


const Page4 = () => {
  return (
    <Carousel showArrows={true} >
    <div>
        <img src={i} alt='nothin' />
        <p className="legend">Legend 1</p>
    </div>
    <div>
       <img src={i} alt='nothin' />   
        <p className="legend">Legend 2</p>
    </div>
    <div>
    <img src={i} alt='nothin' />
        <p className="legend">Legend 3</p>
    </div>
    <div>
    <img src={i} alt='nothin' />
        <p className="legend">Legend 4</p>
    </div>
    <div>
    <img src={i} alt='nothin' />
        <p className="legend">Legend 5</p>
    </div>
    <div>
    <img src={i} alt='nothin' />
        <p className="legend">Legend 6</p>
    </div>
</Carousel>
  )
}

export default Page4