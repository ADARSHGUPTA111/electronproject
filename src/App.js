import React, { Component } from "react";
import styled from "styled-components";

import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";
import "./index.css";

const sideBarData = [
  {
    label: "Github",
    link: "https://github.com",
    image: require("./icons/github.png"),
  },
  {
    label: "Google",
    link: "http://google.com",
    image: require("./icons/google.png"),
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

export default App;
