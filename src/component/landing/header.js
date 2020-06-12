import React from 'react';
import '../../external/css/header.css';
import { Link, animateScroll as scroll } from "react-scroll";

export default class extends React.Component {

  scrollToTop = () => {
    scroll.scrollToTop();
};

  render() {
    return (
        <div className="header">
            <p>Figure<br/>–<br />
            An architecture collective led<br/>
            by James Leng and Jennifer Ly,<br />
            based in San Francisco.
            <br />
            <br />
            email: <a href="mailto:hello@figure.us" rel="noopener noreferrer" target="_blank">hello@figure.us</a><br />
            instagram: <a href="https://www.instagram.com/figure.office/" rel="noopener noreferrer" target="_blank">@figure.office</a><br />
            <br />
            {/* <a href="#veil">News</a><br />
            <a href="#about">About</a> */}
            <Link 
              to="veil"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
            > News</Link>
            <br />
            <Link 
              to="about"
              spy={true}
              smooth={true}
              offset={-30}
              duration={1000}
            >About</Link>
            </p>
        </div>
    )
  }
}