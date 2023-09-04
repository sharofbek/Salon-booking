import React from 'react';
import './Blog.scss'
import './BlogMedia.scss'

import HairCut from './img/Снимок экрана 2023-08-25 221749.png'
import Girls from './img/girls.png'
import Computer from './img/notebuk.png'

const Blog = () => {
    return (
        <div className={'blog'}>
            <p>- Our Blog</p>
            <h1>Browse Our Blog</h1>

            <div className="Blog-cards">
                <div className="blog-card">
                    <img src={HairCut} alt=""/>
                    <button>Beauty & Style</button>
                    <h2>The Ultimate Guide to Finding Your Perfect Stylist</h2>
                    <div className="date">
                        <p><b>•</b> Jenny Smith</p>
                        <p><b>•</b> 22 August 2023</p>

                    </div>
                </div>
                <div className="blog-card">
                    <img src={Girls} alt=""/>
                    <button>Beauty & Style</button>
                    <h2>The Ultimate Guide to Finding Your Perfect Stylist</h2>
                    <div className="date">
                        <p><b>•</b> Jenny Smith</p>
                        <p><b>•</b> 22 August 2023</p>

                    </div>
                </div>
                <div className="blog-card">
                    <img src={Computer} alt=""/>
                    <button>Beauty & Style</button>
                    <h2>The Ultimate Guide to Finding Your Perfect Stylist</h2>
                    <div className="date">
                        <p><b>•</b> Jenny Smith</p>
                        <p><b>•</b> 22 August 2023</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;