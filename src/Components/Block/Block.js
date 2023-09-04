import React from 'react';
import Users from './Снимок экрана 2023-08-23 151433.png'
import Star from './Снимок экрана 2023-08-23 152543.png'
import './Block.scss'
import './NavBlock.scss'

const Block = () => {

    const ToggleButton = () => {
        let Btn = document.getElementById('btn')
        let Circle = document.getElementById('circle')
        Circle.classList.toggle('active')
    }

    return (
        <div>
            <div className='block'>
                <div className="users">
                    <h1>5M+</h1>
                    <p>App Users</p>
                    <img src={Users} alt=""/>
                </div>
                <div className="salon">
                    <button onClick={ToggleButton} id={'btn'}><div className='circle' id='circle'></div> <p>Salon Booking App</p></button>
                    <h1>
                        Your Ultimate <b>Salon</b> Booking Solution!
                    </h1>
                </div>
                <div className="star">
                    <img src={Star} alt=""/>
                </div>
            </div>
            <div className="logos">
                <h1>Logoipsum</h1>
                <h1>Logoipsum</h1>
                <h1>Logoipsum</h1>
                <h1>Logoipsum</h1>
                <h1>Logoipsum</h1>
            </div>
            <div className="benefis">
                <div className="l-text">
                    <p> - Benefis of Signatuer Salon</p>
                    <h1>Experience the Best with Signature</h1>
                </div>
                <div className="r-text">
                    <p>
                        From hassle-free booking to personalized services, Signature Salon
                        offers an array of features that redefin salon appoinments.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Block;