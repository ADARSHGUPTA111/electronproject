import React, { Component } from "react";
import styled from "styled-components";
import AddCustomWindow from "./AddCustomWindow";
// const electron = window.require("electron");
// const ipcRenderer = electron.ipcRenderer;

export class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideBarData: JSON.parse(window.localStorage.getItem("sideBarData")),
      openNewWindow: false
    };
  }
  openAddCustomWindow = () => {
    this.setState({
      ...this.state,
      sideBarData: JSON.parse(window.localStorage.getItem("sideBarData")),
      openNewWindow: !this.state.openNewWindow
    });
    console.log("hey!@");
  };
  refreshOnSubmitInAddCustomWindow = (e, activeLink) => {
    this.setState({
      ...this.state,
      sideBarData: JSON.parse(window.localStorage.getItem("sideBarData")),
      openNewWindow: false
    });
    this.props.setActiveLink(e, activeLink);
  };
  render() {
    let { setActiveLink, activeLink } = this.props;
    let { sideBarData, openNewWindow } = this.state;
    console.log(activeLink);
    // let sideBarData = JSON.parse(window.localStorage.getItem("sideBarData"));

    return (
      <>
        <SideMenu>
          {sideBarData.map(eachLink => {
            if (
              eachLink.label === "Slack" ||
              eachLink.label === "Invide Labs"
            ) {
              return (
                <Label
                  isActiveLink={eachLink.link === activeLink}
                  href=""
                  onClick={e => setActiveLink(e, eachLink.link)}
                >
                  <img alt="icon" src={eachLink.image} />
                </Label>
              );
            } else {
              return (
                <Label
                  isActiveLink={eachLink.link === activeLink}
                  href=""
                  onClick={e => setActiveLink(e, eachLink.link)}
                >
                  <img alt="icon" src={`${eachLink.link}/favicon.ico`} />
                </Label>
              );
            }
          })}
          <button onClick={this.openAddCustomWindow}>
            <svg class="svg-plus" viewBox="0 0 100 100">
              <title>Add Your App</title>
              <line x1="32.5" y1="50" x2="67.5" y2="50" stroke-width="5"></line>
              <line x1="50" y1="32.5" x2="50" y2="67.5" stroke-width="5"></line>
            </svg>
          </button>
          {openNewWindow && (
            <AddCustomWindow
              refreshOnSubmitInAddCustomWindow={
                this.refreshOnSubmitInAddCustomWindow
              }
            />
          )}
        </SideMenu>
      </>
    );
  }
}

const Label = styled.a`
  display: block;
  padding: 10px;
  transition: ease 1.5s;
  border-radius: 15%;
  background-color: ${props =>
    props.isActiveLink ? "rgb(153, 152, 152)" : "none"};
  z-index: ${props => (props.isActiveLink ? "-1" : "none")};

  &:hover {
    background-color: darkgrey;
    cursor: pointer;
    border-radius: 15%;
  }
  img {
    width: 35px;
    height: 35px;
    display: block;
  }
  @media (max-width: 900px) {
    padding: 10px;
  }
`;

const SideMenu = styled.div`
  width: 60px;
  height: 100vh;
  background-color: lightgrey;
  overflow: hidden;
  @media (max-width: 900px) {
    width: 80px;
  }
  button {
    background-color: Transparent;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    padding: 0;
  }
  .svg-plus {
    height: 55px;
    stroke: black;
  }
  button:hover {
    background-color: darkgrey;
    border-radius: 15%;
    transition: ease 0.5s;
    .svg-plus {
      stroke: blue;
      transform: scale(1.3);
      transition: ease 0.6s;
    }
  }
`;

export default SideBar;
