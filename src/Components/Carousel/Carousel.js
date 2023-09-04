import React from 'react';
import './Carousel.scss'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import HairCut from './img/hh.png'
import Salon from './img/modern.png'
import Zerkalo from './img/zerkalo.png'

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


const Carousel1 = () => {

    return (
        <div className='carousel-block'>
            <p>- Featured Salons</p>
            <h1>Discover Our Featured Salons</h1>

            <Carousel responsive={responsive} >
                <div className='carousel-card item'>
                    <img src={HairCut} alt=""/>
                    <h3>Elegance Grace Salon</h3>
                    <p>HairCuts, Make Up, Shaving, Massage</p>
                    <span>8502 Preston Rd. Inglewood, Maine 98380</span>
                    <span>15 min • 1.5km</span>
                </div>
                <div className='carousel-card item'>
                    <img src={Salon} alt=""/>
                    <h3>Elegance Grace Salon</h3>
                    <p>HairCuts, Make Up, Shaving, Massage</p>
                    <span>8502 Preston Rd. Inglewood, Maine 98380</span>
                    <span>15 min • 1.5km</span>
                </div>
                <div className='carousel-card item'>
                    <img src={Zerkalo} alt=""/>
                    <h3>Elegance Grace Salon</h3>
                    <p>HairCuts, Make Up, Shaving, Massage</p>
                    <span>8502 Preston Rd. Inglewood, Maine 98380</span>
                    <span>15 min • 1.5km</span>
                </div>
                <div className='carousel-card item'>
                    <img src={Zerkalo} alt=""/>
                    <h3>Elegance Grace Salon</h3>
                    <p>HairCuts, Make Up, Shaving, Massage</p>
                    <span>8502 Preston Rd. Inglewood, Maine 98380</span>
                    <span>15 min • 1.5km</span>
                </div>
            </Carousel>

    </div>
    );
};

export default Carousel1;