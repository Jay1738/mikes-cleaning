import React, { Component } from 'react';
import './Bot-nav.css';
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class BotNav extends Component {
    render() {
        return (
            <div className="bot-nav">
                <div className="contact-us">
                    <div className="contact-info">
                        <h1>Send Us an inquiry</h1>
                        <button>Click Here</button>
                    </div>
                    <div className="number">
                        <h1>(732) 363-6490</h1>
                    </div>
                    <div className="copyright">
                    <h3>
                        Copyright © 2019 Michael's Commercial Cleaners | Powered by Michael's Commercial Cleaners
                    </h3>
                </div>
                </div>
            </div>
        );
    }
}