import React from 'react';
import './SignatureSalon.scss'

import PlayMarket from '../About/img/image 23.png'
import AppStore from '../About/img/image 22.png'


const SignatureSalon = () => {
    return (
        <div className='signature-salon'>
            <h1>Download the Signature Salon now!</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam delectus dolorem enim facere facilis.
            </p>
            <div className="download">
                <img src={PlayMarket} alt=""/>
                <img src={AppStore} alt=""/>
            </div>
        </div>
    );
};

export default SignatureSalon;