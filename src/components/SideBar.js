import React, { Component } from "react";
import styled from "styled-components";

export class SideBar extends Component {
  render() {
    let { sideBarData, setActiveLink, activeLink } = this.props;
    console.log(activeLink);

    return (
      <>
        <SideMenu>
          {sideBarData.map(eachLink => {
            if (
              eachLink.label === "Slack" ||
              eachLink.label === "Invide Labs"
            ) {
              return (
                <Label
                  isActiveLink={eachLink.link === activeLink}
                  href=""
                  onClick={e => setActiveLink(e, eachLink.link)}
                >
                  <img alt="icon" src={eachLink.image} />
                </Label>
              );
            } else {
              return (
                <Label
                  isActiveLink={eachLink.link === activeLink}
                  href=""
                  onClick={e => setActiveLink(e, eachLink.link)}
                >
                  <img alt="icon" src={`${eachLink.link}/favicon.ico`} />
                </Label>
              );
            }
          })}
        </SideMenu>
      </>
    );
  }
}

const Label = styled.a`
  display: block;
  padding: 10px;
  transition: ease 2s;
  background-color: ${props =>
    props.isActiveLink ? "rgb(153, 152, 152)" : "none"};
  z-index: ${props => (props.isActiveLink ? "-1" : "none")};

  &:hover {
    background-color: darkgrey;
    cursor: pointer;
  }
  img {
    width: 35px;
    height: 35px;
    display: block;
  }
  @media (max-width: 900px) {
    padding: 10px;
  }
`;

const SideMenu = styled.div`
  width: 60px;
  height: 100vh;
  background-color: lightgrey;
  overflow: hidden;
  @media (max-width: 900px) {
    width: 80px;
  }
`;

export default SideBar;
