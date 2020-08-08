import React, { Component } from "react";
import data from "../data";
import styled from "styled-components";
// import { shell } from "electron";
const { BrowserWindow } = window.require("electron").remote;
// const { shell } = window.require("electron");

export class MainContent extends Component {
  componentDidMount() {
    //   const webview = document.querySelector("webview");
    //   const indicator = document.querySelector(".indicator");
    //   const loadstart = () => {
    //     indicator.innerText = "loading...";
    //   };
    //   const loadstop = () => {
    //     indicator.innerText = "";
    //   };
    //   webview.addEventListener("did-start-loading", loadstart);
    //   webview.addEventListener("did-stop-loading", loadstop);
    // const webview1 = document.querySelector("webview");
    // webview.addEventListener("will-navigate", (e) => {
    //   console.log(e, "event");
    //   const protocol = require("url").parse(e.url).protocol;
    //   if (protocol === "http:" || protocol === "https:") {
    //     shell.openExternal(e.url);
    //   }
    // });
    // webview1.addEventListener("new-window", (e) => {
    //   const protocol = require("url").parse(e.url).protocol;
    //   if (protocol === "http:" || protocol === "https:") {
    //     //shell.openExternal(e.url)
    //     let win = new BrowserWindow({ width: 800, height: 600 });
    //     win.loadURL(e.url);
    //   }
    // });
    // const webview = document.querySelector("webview");
    // const indicator = document.querySelector(".indicator");
    // console.log(webview, indicator, "webview");
    // const loadstart = () => {
    //   // indicator.innerText = "loading...";
    // };
    // const loadstop = () => {
    //   // indicator.innerText = "";
    // };
    // if (webview) {
    //   webview.addEventListener("did-start-loading", loadstart);
    //   webview.addEventListener("did-stop-loading", loadstop);
    // }
  }
  render() {
    let { activeLink } = this.props;
    console.log(activeLink);
    return (
      <PageWrapper>
        {activeLink ? (
          <webview
            id="foo"
            src={activeLink}
            style={{ width: "100%", height: "100%" }}
          ></webview>
        ) : (
          <div>Please select different links to see</div>
        )}

        {/* <webview
          id="test"
          src="https://www.github.com/"
          width="100px"
          height="700px"
        ></webview> */}
      </PageWrapper>
    );
  }
}

const PageWrapper = styled.div`
  width: 500px;
  height: 100vh;
`;

export default MainContent;

/* <iframe src={data[0].url} width="800" height="800"></iframe> */
