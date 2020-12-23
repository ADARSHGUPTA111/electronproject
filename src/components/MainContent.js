import React, { Component } from "react";

//const electron = window.require("electron");
//const ipcRenderer = electron.ipcRenderer;

export class MainContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeLabel: this.props.activeLabel,
      currentRestoredLink: ""
    };
  }

  componentDidMount() {}

  render() {
    let { activeLink, activeLabel } = this.props;

    console.log(this.props);

    var safeCount = 0;
    let newSideBarData = JSON.parse(window.localStorage.getItem("sideBarData"));
    var toLoadLink = "";

    for (var i = 0; i < newSideBarData.length; i++) {
      if (newSideBarData[i]["label"] === activeLabel) {
        console.log(activeLabel);
        toLoadLink = newSideBarData[i]["restoredLink"];
        newSideBarData[i]["count"]++;
        safeCount = newSideBarData[i]["count"];
      }
    }
    console.log(safeCount);
    localStorage.setItem("sideBarData", JSON.stringify(newSideBarData));

    return (
      <>
        <webview
          id="myWebview"
          // check for substring if the tolaod is of different website ... Happens due to err.no 3 in electron
          src={
            (safeCount < 2) | !toLoadLink.includes(activeLink)
              ? activeLink
              : toLoadLink
          }
          // src={activeLink}
          allowpopups="true"
          useragent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36"
          style={{ width: "200vh", height: "100vh" }}
        ></webview>
      </>
    );
  }
}

export default MainContent;
