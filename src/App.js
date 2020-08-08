import React, { Component } from "react";
import styled from "styled-components";
import data from "./data";
import logo from "./icons/github.png";
// import Iframe from "react-iframe";
// const electron = require("electron");

import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";
// const electron = require("electron");
// const ipcRenderer = electron.ipcRenderer;
// const Menu = electron.remote.Menu;
// const { remote } = require("electron");
// const { BrowserWindow } = remote;

const sideBarData = [
  {
    label: "Github",
    link: "https://github.com",
  },
  {
    label: "Google",
    link: "http://google.com",
  },
];

class App extends Component {
  state = {
    activeLink: null,
  };

  setActiveLink = (e, activeLink) => {
    e.preventDefault();
    this.setState({
      activeLink,
    });
  };

  componentDidMount() {}

  render() {
    return (
      <>
        <MainWrapper>
          <SideBar
            sideBarData={sideBarData}
            setActiveLink={this.setActiveLink}
          />
          <MainContent activeLink={this.state.activeLink} />
        </MainWrapper>
      </>
    );
  }
}

const MainWrapper = styled.div`
  display: flex;
  flex: auto;
`;

const SideMenu = styled.div`
  width: 7%;
  height: 670px;
  background-color: yellow;
  overflow: hidden;
`;

export default App;

/* <Iframe
            url="http://www.youtube.com/"
            width="1250px"
            height="650px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
            style="display:inline-flex; width:640px; height:480px"
          /> */
/* <SideMenu>
            <a href={data[0].url} target="_blank">
              <img alt="github" src={logo} height="50px" width="50px"></img>
            </a>
          </SideMenu>
           */
