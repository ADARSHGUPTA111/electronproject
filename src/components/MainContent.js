import React, { Component } from "react";
import data from "../data";

export class MainContent extends Component {
  render() {
    return (
      <>
        <div>I am MainContent</div>
        <iframe src={data[0].url} width="800" height="800"></iframe>
      </>
    );
  }
}

export default MainContent;
