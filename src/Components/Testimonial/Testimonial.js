import React from 'react';
import './Testimonial.scss'
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';


const Testimonial = () => {

    const responsive = {
        0: { items: 1 },
        600: { items: 2 },
        1500: { items: 3 },
    };


    const items = [
        <div className="Card-t" data-value='1'>
            <h3>Effortless Booking For Busy Schedules </h3>
            <p>
                Being a teacher and mom, time is precious. Thanks to Signature
                Salon, I cam Easily reschedule appointments witout any hassle. The
                app's secure and contacless payments also give me peace of mind.
                It's like having a beauty oasis at my Fingertips!
            </p>
            <div className="user">
                <img src='' className='userImg' alt=""/>
                <div>
                    <h4>Rechal B.</h4>
                    <p>Teacher</p>
                </div>
            </div>
        </div>,
        <div className="Card-t" data-value='1'>
            <h3>Onfidence Inside And Out </h3>
            <p>
                Being a teacher and mom, time is precious. Thanks to Signature
                Salon, I cam Easily reschedule appointments witout any hassle. The
                app's secure and contacless payments also give me peace of mind.
                It's like having a beauty oasis at my Fingertips!
            </p>
            <div className="user">
                <img src='' className='userImg' alt=""/>
                <div>
                    <h4>Michael S.</h4>
                    <p>Manager</p>
                </div>
            </div>
        </div>,
        <div className="Card-t" data-value='1'>
            <h3>Effortless Booking For Busy Schedules </h3>
            <p>
                Being a teacher and mom, time is precious. Thanks to Signature
                Salon, I cam Easily reschedule appointments witout any hassle. The
                app's secure and contacless payments also give me peace of mind.
                It's like having a beauty oasis at my Fingertips!
            </p>
            <div className="user">
                <img src='' className='userImg' alt=""/>
                <div>
                    <h4>Rechal B.</h4>
                    <p>Teacher</p>
                </div>
            </div>
        </div>,
        <div className="Card-t" data-value='1'>
            <h3>Onfidence Inside And Out </h3>
            <p>
                Being a teacher and mom, time is precious. Thanks to Signature
                Salon, I cam Easily reschedule appointments witout any hassle. The
                app's secure and contacless payments also give me peace of mind.
                It's like having a beauty oasis at my Fingertips!
            </p>
            <div className="user">
                <img src='' className='userImg' alt=""/>
                <div>
                    <h4>Michael S.</h4>
                    <p>Manager</p>
                </div>
            </div>
        </div>,

    ]

    return (
        <div className='testimonial'>
            <p className='p'>- Testimonial</p>
            <h1>Hear What Our User Have to Say about Our Salon Booking App</h1>
            <div className={'cards'}  >
                <AliceCarousel mouseTracking items={items} responsive={responsive} />
            </div>
        </div>
    );
};

export default Testimonial;