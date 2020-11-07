import React, { Component } from "react";
import styled from "styled-components";

import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";
import "./index.css";
// const { localStorage } = require("electron-browser-storage")

var sideBarData = [
  {
    label: "Invide Labs",
    link: "https://app.invidelabs.com",
    image: "https://www.invidelabs.com/imgs/logo.png"
  },
  {
    label: "Slack",
    link: "https://slack.com/workspace-signin",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg"
  },
  {
    label: "Microsoft Teams",
    link: "https://teams.microsoft.com/"
  },
  {
    label: "Trello",
    link: "https://trello.com/"
  },
  {
    label: "WhatsApp",
    link: "https://web.whatsapp.com/"
  },
  {
    label: "Gmail",
    link: "https://mail.google.com/"
  }
];
if (!localStorage.getItem("sideBarData")) {
  localStorage.setItem("sideBarData", JSON.stringify(sideBarData));
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeLink: "https://app.invidelabs.com"
    };
  }

  setActiveLink = (e, activeLink) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      activeLink
    });
  };

  componentDidMount() {}

  render() {
    const { activeLink } = this.state;
    return (
      <>
        <MainWrapper>
          <SideBar setActiveLink={this.setActiveLink} activeLink={activeLink} />
          <MainContent activeLink={activeLink} />
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
