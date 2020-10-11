import React, { Component } from "react";
import styled from "styled-components";

export class SideBar extends Component {
  render() {
    let { sideBarData, setActiveLink, activeLink } = this.props;
    console.log(activeLink);

    return (
      <>
        <SideMenu>
          {sideBarData.map((eachLink) => {
            return (
              <Label
                isActiveLink={eachLink.link === activeLink}
                href=""
                onClick={(e) => setActiveLink(e, eachLink.link)}
              >
                <img alt="icon" src={eachLink.image} />
              </Label>
            );
          })}
        </SideMenu>
      </>
    );
  }
}

const Label = styled.a`
  display: block;
  padding: 3px 3px;
  margin: 5px 5px;

  img {
    width: 100%;
    height: auto;
    display: block;
    box-shadow: ${(props) =>
      props.isActiveLink ? "2px 2px 3px 2px rgba(61,8,33,1)" : "none"};
    z-index: ${(props) => (props.isActiveLink ? "-1" : "none")};
  }
  img:hover {
    box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
    opacity: 0.6;
    cursor: pointer;
  }
`;

const SideMenu = styled.div`
  width: 50px;
  height: 100vh;
  background-color: #f9cdc4;
  overflow: hidden;
`;

export default SideBar;
