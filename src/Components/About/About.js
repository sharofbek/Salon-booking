import React, {useEffect, useState} from 'react';
import AboutImg from './img/aboutImg1.png'
import AppStore from './img/image 22.png'
import GooglePlay from './img/image 23.png'
import axios from "axios";
import './About.scss'
import './AboutMedia.scss'


const About = () => {

    const intialState = [
        {
            "userId": 1,
            "id": 1,
            "title": "5M+",
            "text": "Active users"
        },
        {
            "userId": 1,
            "id": 2,
            "title": "4.8+",
            "text": "Review Ratings"
        },
        {
            "userId": 1,
            "id": 3,
            "title": "10k+",
            "text": "Salons Listed"
        }
    ]
    const [rate , setRate] = useState(intialState)
    // useEffect(() => {
    //     axios({
    //         method:"get",
    //         url:"http://localhost:5000/todos"
    //     }).then((res) => setRate(res.data))
    //
    // },[])
    //


    return (
        <div className='about'>
            <div className="Foto">
                <img src={AboutImg} alt=""/>
            </div>
            <div className="about-text">
                <p>- About Us</p>
                <h1>Our Passion For Beauty, Simplified.</h1>
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem eveniet excepturi exercitationem, explicabo hic laudantium provident totam! Adipisci, iste.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem eveniet excepturi exercitationem, explicabo hic laudantium provident totam! Adipisci, iste.</li>
                </ul>

                <div className="rating">
                    {
                        rate.map((item , index) => <div className='rate'>
                            <h2>{item.title}</h2>
                            <p>{item.text}</p>
                        </div>)
                    }
                </div>
                <div className="get-app">
                    <img src={GooglePlay} alt=""/>
                    <img src={AppStore} alt=""/>
                </div>

            </div>
        </div>
    );
};

export default About;