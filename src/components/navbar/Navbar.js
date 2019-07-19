import React, { Component } from 'react';
import './Navbar.css';
import earth from './images/earth.jpeg';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    <img src={earth} alt="Logo"/>
                    <div className="name-container">
                        <h1>Micheal's Cleaning</h1>
                        <h2>Enviromentally Friendly Cleaning Services</h2>
                    </div>
                    <div className="menu-container">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}