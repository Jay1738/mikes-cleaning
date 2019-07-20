import React, { Component } from 'react';
import './About.css'
import van from './images/van.jpg';
import window from './images/window.jpg';



export default class About extends Component {
    render() {
        return (
            <div className="about-div">
                <div className="about-container">
                    <h1>ABOUT US</h1>
                    <h2>WHY OUR CLIENTS TRUST US</h2>
                    <h3>Donec commodo neque id est imperdiet efficitur. Phasellus pulvinar, lacus eu lacinia bibendum, ex sapien egestas diam, in dapibus arcu risus sed velit. Proin finibus blandit consectetur. Suspendisse bibendum convallis enim eu ultrices. Donec id ultricies velit, non dapibus nisi. Sed ut massa vel purus fermentum euismod nec semper lorem. Phasellus id sem aliquet, pulvinar mi sit amet, bibendum dui. Phasellus porttitor laoreet diam, id molestie lorem sollicitudin eget. Fusce pretium finibus odio at euismod. Curabitur porttitor quis leo ut sollicitudin. Duis eget lobortis justo, vel dictum mauris. Duis rhoncus, nisl in consequat semper, nulla nunc ornare mauris, non cursus quam elit non magna. Quisque eget augue nisi. Nulla facilisi. Donec tincidunt metus ullamcorper pulvinar lobortis. Nullam porttitor sem erat.</h3>
                    <h2>OUR VISION</h2>
                    <h3>Donec commodo neque id est imperdiet efficitur. Phasellus pulvinar, lacus eu lacinia bibendum, ex sapien egestas diam, in dapibus arcu risus sed velit.</h3>
                    <h2>OUR MISSION</h2>
                    <h3>Sed ipsum magna, pulvinar a eros vel, cursus porttitor justo. Duis convallis, libero ut iaculis interdum, massa nunc efficitur sem, sit amet varius lectus nulla tempor eros. Duis non nunc eget mauris eleifend bibendum. Quisque et porta ligula. Proin ultricies viverra ultrices. Sed ligula diam, aliquet ac lacinia maximus, finibus fermentum massa. Morbi sit amet nunc facilisis, euismod nibh et, consectetur nulla. Proin ut nulla ac sapien lacinia dapibus.</h3>
                </div>
                <div className="about-picture-container">
                    <img src={van} alt="cleaning van"></img>
                    <img src={window} alt="cleaning window"></img>
                </div>
            </div>
        );
    }
}