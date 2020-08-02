import React, { Component } from "react";
import styled from "styled-components";
import logo from "../icons/github.png";
import data from "../data";

export class SideBar extends Component {
  render() {
    return (
      <>
        <SideMenu>
          <a href={data[0].url} target="_blank">
            <img alt="github" src={logo} height="50px" width="50px"></img>
          </a>
        </SideMenu>
      </>
    );
  }
}

const SideMenu = styled.div`
  width: 5%;
  height: 670px;
  background-color: yellow;
  overflow: hidden;
`;
export default SideBar;
