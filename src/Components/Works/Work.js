import React from 'react';
import './work.scss'
import './MediaWork.scss'

const Work = () => {
    return (
        <div className='work-block'>
            <p>- How it works</p>
            <h1>Seamless Salon Booking: How Signature Works </h1>

            <div className="work-cards">
                <div className="card">
                    <div className="circle">
                        <h4>01</h4>
                    </div>
                    <h4>Download and Install App</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem impedit iusto nihil nostrum perferendis perspiciatis quos soluta tenetur voluptatem, voluptatum!</p>
                </div>
                <div className="card">
                    <div className="circle">
                        <h4>02</h4>
                    </div>
                    <h4>Discover Salons and Services</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem impedit iusto nihil nostrum perferendis perspiciatis quos soluta tenetur voluptatem, voluptatum!</p>
                </div>
                <div className="card">
                    <div className="circle">
                        <h4>03</h4>
                    </div>
                    <h4>Schedule Appointment</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem impedit iusto nihil nostrum perferendis perspiciatis quos soluta tenetur voluptatem, voluptatum!</p>
                </div>
            </div>
        </div>
    );
};

export default Work;