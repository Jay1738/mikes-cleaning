import React, { Component } from 'react';
import './Slideshow.css'
import girl from './images/girl-with-mop.jpg';
import guy from './images/guy-wipe-windows.jpg';
import swifer from './images/swifer.jpg';
import wash from './images/wash-toilet.jpg';

export default class Slideshow extends Component {

    constructor(props) {
        super(props);
        this.getImageId = this.getImageId.bind(this);
        this.switchImage = this.switchImage.bind(this);
        this.init = this.init.bind(this);
        this.state = {
            currentImage: 0,
            image: 0

        };
    }

    getImageId() {
        if(this.currentImage < 3) {
            this.setState({
                currentImage: this.state.currentImage +1
            })
        } else {
            this.setState({
                currentImage: 0
            })
        }
        return this.currentImage;
    }

    switchImage() {
            this.setState({
                image: this.getImageId()
            });
    }

    init() {
        setInterval(this.switchImage, 1000)
    }

    
    render() {
        const imagePath = [guy, girl, wash, swifer];

        this.init();

        return (
            <div className="slideshow-container">
                <img src={imagePath[this.state.image]} alt="cleaning images"/>      
            </div>
        );
    }
}