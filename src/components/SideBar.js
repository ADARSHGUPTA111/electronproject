import React, { Component } from "react";
import styled from "styled-components";
import AddCustomWindow from "./AddCustomWindow";
const electron = window.require("electron");
const ipcRenderer = electron.ipcRenderer;

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

          <button onClick={this.openAddCustomWindow}>Add App</button>
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
  transition: ease 2s;
  background-color: ${props =>
    props.isActiveLink ? "rgb(153, 152, 152)" : "none"};
  z-index: ${props => (props.isActiveLink ? "-1" : "none")};

  &:hover {
    background-color: darkgrey;
    cursor: pointer;
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
`;

export default SideBar;
