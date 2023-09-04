import React from 'react';
import Navbar from "./Components/Navbar/Navbar";
import './App.scss'
import Block from "./Components/Block/Block";
import Card from "./Components/Cards/Card";
import About from "./Components/About/About";
import Work from "./Components/Works/Work";
import Carousel1 from "./Components/Carousel/Carousel";
import BestFeature from "./Components/BestFeature/BestFeature";
import Global from "./Components/Global/Global";
import Testimonial from "./Components/Testimonial/Testimonial";
import SignatureSalon from "./Components/SignatureSalon/SignatureSalon";
import PricingTable from "./Components/Pricing/PricingTable";
import Blog from "./Components/Blog/Blog";
import Footer from "./Components/Footer/Footer";

const App = () => {
    return (
        <div className='container-fluid1'>
          <Navbar/>
          <Block/>
          <Card/>
          <About/>
          <Work/>
          <Carousel1/>
          <BestFeature/>
          <Global/>
          <Testimonial/>
          <SignatureSalon/>
          <PricingTable/>
          <Blog/>
          <Footer/>
        </div>
    );
};

export default App;