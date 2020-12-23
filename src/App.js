import React, { Component } from "react";
import styled from "styled-components";

import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";
// const { localStorage } = require("electron-browser-storage")

var sideBarData = [
  {
    label: "Invide Labs",
    link: "https://app.invidelabs.com",
    image: "https://www.invidelabs.com/imgs/logo.png",
    restoredLink: "https://app.invidelabs.com",
    count: 0
  },
  {
    label: "Slack",
    link: "https://slack.com/workspace-signin",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
    restoredLink: "https://slack.com/workspace-signin",
    count: 0
  },
  {
    label: "Microsoft Teams",
    link: "https://teams.microsoft.com/",
    restoredLink: "https://teams.microsoft.com/",
    count: 0
  },
  {
    label: "Trello",
    link: "https://trello.com/",
    restoredLink: "https://trello.com/",
    count: 0
  },
  {
    label: "WhatsApp",
    link: "https://web.whatsapp.com/",
    restoredLink: "https://web.whatsapp.com/",
    count: 0
  },
  {
    label: "Gmail",
    link: "https://mail.google.com/",
    restoredLink: "https://mail.google.com/",
    count: 0
  }
];

if (!localStorage.getItem("sideBarData")) {
  localStorage.setItem("sideBarData", JSON.stringify(sideBarData));
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeLink: "https://app.invidelabs.com",
      activeLabel: "Invide Labs"
    };
  }

  setActiveLink = (e, activeLink, activeLabel) => {
    e.preventDefault();

    this.setState({
      ...this.state,
      activeLink,
      activeLabel
    });
  };

  componentDidUpdate() {
    var myWebview = document.getElementById("myWebview");

    myWebview.addEventListener("did-stop-loading", e => {
      let newSideBarData = JSON.parse(
        window.localStorage.getItem("sideBarData")
      );

      for (var i = 0; i < newSideBarData.length; i++) {
        if (newSideBarData[i]["label"] === this.state.activeLabel) {
          newSideBarData[i]["restoredLink"] = myWebview.getURL();
        }
      }
      localStorage.setItem("sideBarData", JSON.stringify(newSideBarData));
    });
  }

  render() {
    const { activeLink, activeLabel } = this.state;

    return (
      <>
        <MainWrapper>
          <SideBar setActiveLink={this.setActiveLink} activeLink={activeLink} />
          <MainContent activeLink={activeLink} activeLabel={activeLabel} />
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
