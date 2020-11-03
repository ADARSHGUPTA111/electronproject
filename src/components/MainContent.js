import React, { Component } from "react";
//import styled from "styled-components";

// const { BrowserWindow } = window.require("electron").remote;
export class MainContent extends Component {
  componentDidMount() {}

  render() {
    let { activeLink } = this.props;
    // console.log(activeLink);
    return (
      <>
        <webview
          id="foo"
          src={activeLink}
          allowpopups="true"
          useragent="Chrome/86.0.4240.111"
          style={{ width: "200vh", height: "100vh" }}
        ></webview>
      </>
    );
  }
}

export default MainContent;
