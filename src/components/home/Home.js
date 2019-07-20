import React, { Component } from 'react';
import Navbar from '../navbar/Navbar.js';
import './Home.css'
import Slideshow from '.././slideshow/Slideshow.js';
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import About from './about/About.js';
import Testimonial from "./testimonial/Testimonial.js";
import BotNav from '../bot-nav/Bot-nav.js';

export default class Home extends Component {
    render() {
        return (
            <div className="home-page">
                    <Navbar/>
                    <div className="blue-tint"></div>
                    <div className="slogan-container">
                        <h2>PROFESSIONAL CLEANING SERVICES AND FLOOR WAXING</h2>
                        <h1>SERVING THE NEW JERSEY AREA FOR OVER 30 YEARS</h1>
                        <h3>The best service at the best price! An enviromentally concious cleaning service that fits your needs. One call cleans it all!</h3>
                        <a href=""><span>+</span><span> READ MORE</span></a>
                    </div>
                    <div className="call-container">
                        <h3>Call Us - 24/7</h3>
                        <h1><span><FontAwesomeIcon className="fa-flip-horizontal" icon={faPhone} /></span>(732) 363-6490</h1>
                    </div>
                    <Slideshow/>
                    <About/>
                    <Testimonial/>
                    <BotNav/>
            </div>
        );
    }
}