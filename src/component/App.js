import React from 'react';
import '../external/css/App.css';
import Header from './landing/header.js';
import Slider from './landing/slideshow.js';
import News from './landing/new.js'
import About from './landing/about.js'
import { animateScroll as scroll } from "react-scroll";
import {MdKeyboardArrowUp as UpArrow}  from 'react-icons/md';
export default class App extends React.Component {

  scrollToTop = () => {
    scroll.scrollToTop();
};

  render() {
    return (
      <div className="App">
        <Header />
        <Slider />
        <News />
        <About />
        <div className="scroll"><UpArrow onClick={this.scrollToTop} size={32}/></div>
      </div>
    )
  }
}
