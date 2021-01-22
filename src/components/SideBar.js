import React, { Component } from "react";
import styled from "styled-components";
import AddCustomWindow from "./AddCustomWindow";
//const electron = window.require("electron");
//const ipcRenderer = electron.ipcRenderer;

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
  };

  //this function can delete any app
  handleDoubleClick = (e, labelToDelete) => {
    if (window.confirm("Are you Sure , you want to delete this app?")) {
      let newSideBarData = JSON.parse(
        window.localStorage.getItem("sideBarData")
      );
      console.log(newSideBarData[0]["label"]);
      newSideBarData = newSideBarData.filter(
        eachsideBarData => eachsideBarData.label !== labelToDelete
      );

      localStorage.setItem("sideBarData", JSON.stringify(newSideBarData));
      this.setState({
        ...this.state,
        sideBarData: JSON.parse(window.localStorage.getItem("sideBarData"))
      });
      //After deleting Any App the default app gets opened
      this.props.setActiveLink(e, "https://app.invidelabs.com");
    }
  };

  refreshOnSubmitInAddCustomWindow = (e, activeLink, activeLabel) => {
    this.setState({
      ...this.state,
      sideBarData: JSON.parse(window.localStorage.getItem("sideBarData")),
      openNewWindow: false
    });
    this.props.setActiveLink(e, activeLink, activeLabel);
  };

  componentDidMount() {}

  render() {
    let { setActiveLink, activeLink } = this.props;
    let { sideBarData, openNewWindow } = this.state;
    // console.log(activeLink);

    return (
      <>
        <SideMenu>
          {sideBarData.map(eachLink => {
            return (
              <Label
                isActiveLink={eachLink.link === activeLink}
                href=""
                onClick={e => setActiveLink(e, eachLink.link, eachLink.label)}
                onDoubleClick={e => this.handleDoubleClick(e, eachLink.label)}
                // key={i}
              >
                <img
                  src={`${eachLink.link}/favicon.ico`}
                  alt={`${eachLink.label}`}
                  title={`${eachLink.label}`}
                  onError={e => {
                    e.target.onerror = null;
                    e.target.src = `https://ui-avatars.com/api/?name=${eachLink.label}&rounded=true&background=random&bold=true`;
                  }}
                />
              </Label>
              );
            }
          )}
          <button onClick={this.openAddCustomWindow}>
            <svg
              className="svg-plus"
              height="45px"
              stroke="black"
              viewBox="0 0 100 100"
            >
              <title>Add Your App</title>
              <line x1="32.5" y1="50" x2="67.5" y2="50" strokeWidth="7"></line>
              <line x1="50" y1="32.5" x2="50" y2="67.5" strokeWidth="7"></line>
            </svg>
          </button>
          {openNewWindow && (
            <AddCustomWindow
              refreshOnSubmitInAddCustomWindow={
                this.refreshOnSubmitInAddCustomWindow
              }
            />
          )}
          <a href="mailto:khandelwalsarvesh8@gmail.com,surajgupta7534@gmail.com,adarshgupta4399@gmail.com?subject=Feedback">
            <svg
              className="feedback"
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 0 511 511.9996"
              width="30px "
            >
              <title>Feedback</title>
              <path
                d="m444.464844 4.394531c-5.855469-5.859375-15.355469-5.859375-21.210938 0l-115.605468 115.605469h-262.148438c-24.8125 
                0-45 20.1875-45 45v209.996094c0 24.816406 20.1875 45 45 45h16v77c0 6.097656 3.691406 11.589844 9.335938 13.890625 
                5.726562 2.335937 12.183593.894531 16.386718-3.398438l85.585938-87.492187h174.691406c24.8125 0 45-20.183594 
                45-45v-170.144532l115.605469-115.605468c5.855469-5.859375 5.855469-15.355469 0-21.214844zm-137.886719 243.949219-42.425781-42.425781 
                127.28125-127.277344 42.425781 42.425781zm-58.40625-15.980469 31.960937 31.960938-54.78125 22.820312zm114.328125 142.632813c0 
                8.273437-6.730469 15-15 15h-181c-4.035156 0-7.902344 1.628906-10.722656 4.511718l-64.277344 
                65.707032v-55.21875c0-8.28125-6.714844-15-15-15h-31c-8.269531 0-15-6.726563-15-15v-209.996094c0-8.273438 
                6.730469-15 15-15h232.144531l-45.3125 45.3125c-1.25 1.25-2.488281 2.972656-3.3125 5.011719l-41.519531 99.675781h-81c-8.285156 
                0-15 6.714844-15 15 0 8.28125 6.714844 14.988281 15 14.988281h90.992188.011718c1.929688 0 4-.394531 
                5.894532-1.207031l108.773437-45.304688c1.8125-.707031 3.640625-1.9375 5.015625-3.3125l45.3125-45.3125zm92.570312-275.144532-42.425781-42.425781 
                21.214844-21.210937 42.425781 42.425781zm0 0"
              />
            </svg>
          </a>
        </SideMenu>
      </>
    );
  }
}

const Label = styled.a`
  display: block;
  padding: 10px;
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
`;

const SideMenu = styled.div`
  width: 60px;
  @media (max-width: 900px) {
    width: 80px;
  }
  height: 100vh;
  background-color: lightgrey;
  overflow: auto;
  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  @media (max-width: 900px) {
    width: 80px;
  }
  button {
    background-color: Transparent;
    border: none;
    cursor: pointer;
    padding: 5px;
  }
  .feedback {
    padding: 15px;
  }
  .feedback:hover {
    background-color: darkgrey;
  }
  button:hover {
    background-color: darkgrey;
  }
`;

export default SideBar;
