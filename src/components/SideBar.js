import React, { Component } from "react";
import styled from "styled-components";
import logo from "../icons/github.png";
import data from "../data";

export class SideBar extends Component {
  render() {
    let { sideBarData } = this.props;
    return (
      <>
        <SideMenu>
          {/* <a href={data[0].url} target="test"> */}
          {/* <img alt="github" src={logo} height="50px" width="50px"></img> */}
          {/* </a> */}
          {sideBarData.map((eachLink) => {
            return (
              <Label
                href=""
                onClick={(e) => this.props.setActiveLink(e, eachLink.link)}
              >
                {eachLink.label}
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
`;

const SideMenu = styled.div`
  width: 7%;
  height: 670px;
  background-color: yellow;
  overflow: hidden;
`;
export default SideBar;
