import React, { Component } from "react";
import './mystyle.css';
import MainContent from './MainContent';

export class SideBar extends Component {
  
  render() {
    let { sideBarData, setActiveLink } = this.props;
    return (
      <nav class="nav flex-column navbar-light bg-light">
        <a className="nav-link" >
          <img alt="icon" src="https://www.invidelabs.com/imgs/logo.png" />
          <span class="sr-only">(current)</span>
        </a>
          {sideBarData.map((eachLink) => {
            return (
                <a className="nav-link" onClick={(e) => setActiveLink(e, eachLink.link)}>
                  <img alt="icon" src={eachLink.image} />
                </a>
              );
            })}
        </nav>
    );
  }
}

export default SideBar;
