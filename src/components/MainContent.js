import React, { Component } from "react";
import styled from "styled-components";

const { BrowserWindow } = window.require("electron").remote;
export class MainContent extends Component {
  componentDidMount() {}

  render() {
    let { activeLink } = this.props;
    console.log(activeLink);
    return (
      <>
        {activeLink ? (
          <webview
            id="foo"
            src={activeLink}
            style={{ width: "200vh", height: "100vh" }}
          ></webview>
        ) : (
          <div>Please select different links to see</div>
        )}
      </>
    );
  }
}

export default MainContent;
