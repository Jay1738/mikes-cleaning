import React, { Component } from 'react';
import './Title.css';

export default class Title extends Component {

    render() {

        return (
            <div className="container">
                <div className="blue"></div>
                <div className="title-container">
                    <h1 id="title">ABOUT US</h1>
                    <div className="call-us-container">
                    </div>
                </div>
            </div>
        );
    }
}