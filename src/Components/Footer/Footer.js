import React from 'react';
import './Footer.scss'
import './MediaFooter.scss'
import Logo from './img/logo.png'


const Footer = () => {
    return (
        <div className='footer'>
            <div className="logo">
                <h1><img src={Logo} alt=""/> Signature Salon</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad aliquid amet corporis eaque molestias.
                </p>
                <div className="social">
                    <div className="social-icon f"></div>
                    <div className="social-icon b"></div>
                    <div className="social-icon y"></div>
                    <div className="social-icon t"></div>
                    <div className="social-icon i"></div>
                </div>
            </div>

            <div className="Contact">
                <div className="company">
                    <h3>Company</h3>
                    <p>Home</p>
                    <p>About</p>
                    <p>Features</p>
                    <p>Testimonial</p>
                    <p>Contact</p>
                </div>
                <div className="contact">
                    <h3>Contact</h3>
                    <p>+0123-456-789</p>
                    <p>www.google.com</p>
                    <p>google@gmail.com</p>
                    <p>56 , Rajar Golli </p>
                </div>
            </div>

            <div className="send">
                <h3>Get the latest Information</h3>
                <div className="input">
                    <input type="email" placeholder={'Email address'}/>
                    <button>=></button>
                </div>
            </div>

            <div className='hr'></div>

            <div className="copyright">
                <p>Copyright ○ 2023 Signature Salon . All Rights Reserved </p>
                <p>User Terms & Conditions | Privacy Policy</p>
            </div>
        </div>
    );
};

export default Footer;