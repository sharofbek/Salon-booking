import React from 'react';
import './Global.scss'

import GlobalImg from './112.jpg'
import MediaImg from './imgMedia.png'

const Global = () => {
    return (
        <div className='global'>
            <p>- Our Experts</p>
            <h1>Global Beauty Experts ar Your Fingertips</h1>
            <img src={GlobalImg} className='img' alt=""/>
            <img src={MediaImg} className='imgMedia' alt=""/>
        </div>
    );
};

export default Global;