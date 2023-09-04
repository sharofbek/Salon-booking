import React, {useState} from 'react';
import './Pricing.scss'
import './PricingMedia.scss'

import Check from './img/checkImg.png'


const PricingTable = () => {



    const intialState = [29, 49 , 99]
    const intialState2 = [129, 149 , 199]
    const [month , setMonth] = useState('month')
    const [price , setPrice] = useState(intialState)

    const SetPrice = () => {

        let Switch = document.getElementById('switch')
        let Circle1 = document.getElementById('circle1')
        Circle1.classList.toggle('activePrice')
        setPrice(intialState2)
        setMonth('year')
    }

    return (

        <div className='pricing'>
            <p className="p">- Pricing Table</p>
            <h1>Choose the plan that's right for you</h1>

            <div className="card-group">
                    <div className="Switch">
                    <p>Bill Mothly</p>
                    <button className="switch" id={'switch'} onClick={SetPrice}>
                        <div id={'circle1'} className='circle1'>.</div>
                    </button>
                    <p>Bill Annually</p>
                </div>
                    <div className="card">
                        <h2>${price[0]}<span>/{month}</span></h2>
                        <h3>Basic</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                        <hr/>
                        <div className="check">
                            <img src={Check} alt=""/>
                            <span>Lorem ipsum dolor sit amet.</span>
                        </div>
                        <div className="check">
                            <img src={Check} alt=""/>
                            <span>Sed ut perspiciatis</span>
                        </div>
                        <div className="check">
                            <img src={Check} alt=""/>
                            <span>At vero eos et accusamus</span>
                        </div>
                        <button>Choose Plan --></button>
                    </div>
                    <div className="card">
                        <h2>${price[1]}<span>/{month}</span></h2>
                        <h3>Standart</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                        <hr/>
                        <div className="check">
                            <img src={Check} alt=""/>
                            <span>Lorem ipsum dolor sit amet.</span>
                        </div>
                        <div className="check">
                            <img src={Check} alt=""/>
                            <span>Sed ut perspiciatis</span>
                        </div>
                        <div className="check">
                            <img src={Check} alt=""/>
                            <span>At vero eos et accusamus</span>
                        </div>
                        <button>Choose Plan --></button>
                    </div>
                    <div className="card">
                        <h2>${price[2]}<span>/{month}</span></h2>
                        <h3>Basic</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                        <hr/>
                        <div className="check">
                            <img src={Check} alt=""/>
                            <span>Lorem ipsum dolor sit amet.</span>
                        </div>
                        <div className="check">
                            <img src={Check} alt=""/>
                            <span>Sed ut perspiciatis</span>
                        </div>
                        <div className="check">
                            <img src={Check} alt=""/>
                            <span>At vero eos et accusamus</span>
                        </div>
                        <button>Choose Plan --></button>
                    </div>
            </div>
        </div>
    );
};

export default PricingTable;