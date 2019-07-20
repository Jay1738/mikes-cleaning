import React, { Component } from 'react';
import './Testimonial.css'

export default class Testimonial extends Component {
    render() {
        return (
            <div className="testimonial-div">
                    <div className="heading-container">
                        <h1>TESTIMONIALS</h1>
                        <h3>See what some of our clients have to say about us. With MC, your satisfaction is guaranteed.</h3>
                    </div>
                    <div className="testimonial-container">
                        <h2>Sed ipsum magna, pulvinar a eros vel, cursus porttitor justo. Duis convallis, libero ut iaculis interdum, massa nunc efficitur sem, sit amet varius lectus nulla tempor eros. Duis non nunc eget mauris eleifend bibendum. Quisque et porta ligula. Proin ultricies viverra ultrices. Sed ligula diam.</h2>
                        <h4><span><i class="fas fa-quote-left fa-5x"></i></span><span>John Doe</span></h4>
                        <h2>Sed ipsum magna, pulvinar a eros vel, cursus porttitor justo. Duis convallis, libero ut iaculis interdum, massa nunc efficitur sem, sit amet varius lectus nulla tempor eros. Duis non nunc eget mauris eleifend bibendum. Quisque et porta ligula. Proin ultricies viverra ultrices. Sed ligula diam.</h2>   
                        <h4><span><i class="fas fa-quote-left fa-5x"></i></span><span>John Doe</span></h4>
                        
                    </div>
            </div>
        );
    }
}