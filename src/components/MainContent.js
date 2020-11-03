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
          useragent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36"
          style={{ width: "200vh", height: "100vh" }}
        ></webview>
      </>
    );
  }
}

export default MainContent;
