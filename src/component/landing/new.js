import React from 'react';
import Image from '../../external/img/news_img/figure_new_img.jpg';
import '../../external/css/news.css';
 
export default class extends React.Component {
  render() {
    return (
        <div className="news">
            <p id="veil">News</p>
            <div className="news-align">
              <img src={Image} alt=""/>
              <p>
                Veil Craft is the inaugural exhibition of M&A x Craft Contemporary, a five-year
                partnership between the two institutions exploring craft through art and
                architecture. <a href="https://www.materialsandapplications.org/ma-x-craft" rel="noopener noreferrer" target="_blank">Read More</a>
              </p> 
            </div>
        </div>
    )
  }
}