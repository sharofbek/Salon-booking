import React from 'react';
import './NavbarStyle.scss'
import Logo from './Снимок экрана 2023-08-23 142426_auto_x2.jpg'

const Navbar = () => {
    return (
        <div>
            <nav className='nav'>
                <input type="checkbox" id="nav-check"/>
                <div className="nav-header">
                    <div className="logo">
                        <img src={Logo} alt=""/>
                        <h3>Signature Salon</h3>
                    </div>
                </div>
                <div className="nav-btn">
                    <label htmlFor="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>
                <div className="nav-links">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Testimonial</a></li>
                        <li><a href="#">BLog</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>

                    <button className='btn-nav'>
                        Get the App
                    </button>
                </div>

            </nav>
        </div>
    );
};

export default Navbar;