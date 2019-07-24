import React, { Component } from 'react';
import Navbar from '../navbar/Navbar.js';
import './About.css';
import Title from './title/Title.js';

export default class AboutPage extends Component {
    render() {
        return (
            <div className="about">
                <Navbar/>
                <Title/>
            </div>
        );
    }
}