import React, {useState} from 'react';
import './BestFeature.scss'
import './MediaBest.scss'

import Check from './img/checkImg.png'

const intialState = [
    {
        img:Check,
        text:'Top Specialist'
    },
    {
        img:Check,
        text:'Discount For All Services'
    },{
        img:Check,
        text:'Seamless Salon Exploration'
    },
    {
        img:Check,
        text:'Quick Appointment'
    },


]




const BestFeature = () => {
    return (
        <div className='best'>
            <div className="text">
                <p>- Best Feature</p>
                <h1>Explore Nearby Salons on the Interactive Map</h1>
                <span>
                Discover nearby salons efforlessly with our interactive map feature,
                bringind beauty  and convenience together at your fingertips.
            </span>

                {
                    intialState.map((item, index) => <div className="check">
                        <img src={item.img} alt=""/>
                        <h4>{item.text}</h4>
                    </div>)
                }

                <button>Book an Appointment</button>
            </div>
            <div className="photo">
                <div className='cube'></div>
                <div className='bg'></div>
            </div>
        </div>
    );
};

export default BestFeature;