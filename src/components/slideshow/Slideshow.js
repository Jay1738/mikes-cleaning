import React, { Component } from 'react';
import './Slideshow.css'
import girl from './images/girl-with-mop.jpg';
import guy from './images/guy-wipe-windows.jpg';
import swifer from './images/swifer.jpg';
import wash from './images/wash-toilet.jpg';
import floors from './images/floors.jpg';

export default class Slideshow extends Component {
    
    render() {

        return (
            <div className="slideshow-container">
                <img src={guy} alt="window wiper"/> 
                <img src={girl} alt="girl with mop"/>
                <img src={wash} alt="cleaning toilet"/>
                <img src={swifer} alt="swifer"/> 
                <img src={floors} alt="floor cleaner"/>
            </div>
        );
    }
}