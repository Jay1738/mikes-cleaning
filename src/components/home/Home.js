import React, { Component } from 'react';
import Navbar from '../navbar/Navbar.js';
import './Home.css'
import Slideshow from '.././slideshow/Slideshow.js';

export default class Home extends Component {
    render() {
        return (
            <div className="home-page">
                    <Navbar/>
                    <Slideshow/>
            </div>
        );
    }
}