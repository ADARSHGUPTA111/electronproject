import React, { Component } from "react";
import styled from "styled-components";
import data from "./data";
import logo from "./icons/github.png";
import Iframe from "react-iframe";

// import SideBar from "./components/SideBar";
// import MainContent from "./components/MainContent";
// const electron = window.require("electron");
// const ipcRenderer = electron.ipcRenderer;
// const Menu = electron.remote.Menu;

class App extends Component {
  state = {};
  componentDidMount() {}

  render() {
    return (
      <>
        <MainWrapper>
          <SideMenu>
            <a href={data[0].url} target="_blank">
              <img alt="github" src={logo} height="50px" width="50px"></img>
            </a>
          </SideMenu>
          <Iframe
            url="http://www.youtube.com/"
            width="1250px"
            height="650px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
          />
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
