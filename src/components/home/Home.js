import React, { Component } from 'react';
import Navbar from '../navbar/Navbar.js';
import './Home.css'
import Slideshow from '.././slideshow/Slideshow.js';

export default class Home extends Component {
    render() {
        return (
            <div className="home-page">
                    <Navbar/>
                    <div className="blue-tint"></div>
                    <div className="slogan-container">
                        <h2>ENVIROMENTAL CLEANING SERVICE</h2>
                        <h1>SERVING THE NEW JERSEY AREA FOR OVER 10 YEARS</h1>
                        <h3>The best service at the best price! An enviromentally concious cleaning service that fits your needs. One call cleans it all!</h3>
                        <a href=""><span>+</span><span> READ MORE</span></a>
                    </div>
                    <div className="call-container">
                        <h3>Call Us - 24/7</h3>
                        <h1>+1 888-123-1234</h1>
                        <i class="fas fa-phone"></i>
                    </div>
                    <Slideshow/>
                    <i class="fas fa-phone"></i>
            </div>
        );
    }
}