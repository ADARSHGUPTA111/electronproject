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
    console.log("hey!@");
  };

  //this function can delete any app
  handleDoubleClick = (e, labelToDelete) => {
    // e.preventDefault();
    console.log("hi");
    let newSideBarData = JSON.parse(window.localStorage.getItem("sideBarData"));
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
            if (
              eachLink.label === "Slack" ||
              eachLink.label === "Invide Labs"
            ) {
              return (
                <Label
                  isActiveLink={eachLink.link === activeLink}
                  href=""
                  onClick={e => setActiveLink(e, eachLink.link, eachLink.label)}
                  onDoubleClick={e => this.handleDoubleClick(e, eachLink.label)}
                  // key={i}
                >
                  <img alt="icon" src={eachLink.image} />
                </Label>
              );
            }
            else {
              return (
                <Label
                  isActiveLink={eachLink.link === activeLink}
                  href=""
                  onClick={e => setActiveLink(e, eachLink.link, eachLink.label)}
                  onDoubleClick={e => this.handleDoubleClick(e, eachLink.label)}
                  // key={i}
                >
                  <img alt="icon" src={`${eachLink.link}/favicon.ico`} />
                </Label>
              );
            }
          })}
          <button onClick={this.openAddCustomWindow}>
            <svg className="svg-plus" height="55px" stroke="black" viewBox="0 0 100 100">
              <title>Add Your App</title>
              <line x1="32.5" y1="50" x2="67.5" y2="50" strokeWidth="5"></line>
              <line x1="50" y1="32.5" x2="50" y2="67.5" strokeWidth="5"></line>
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
            <svg className="feedback" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="35px" height="35px" viewBox="0 0 512 512" style={{enableBackground:"new 0 0 512 512"}} xmlSpace="preserve">
              <title>Feedback</title>
              <path style={{fill:"#57555C"}} d="M346,482c-8.291,0-15-6.709-15-15s6.709-15,15-15c24.814,0,45-20.186,45-45c0-8.291,6.709-15,15-15  s15,6.709,15,15C421,448.353,387.367,482,346,482z"/>
              <path style={{fill:"#787780"}} d="M46,280.188c-8.291,0-15-6.709-15-15V257c0-63.354,26.953-126.131,73.916-168.729  c6.123-5.552,15.645-5.112,21.182,1.025c5.566,6.138,5.098,15.63-1.025,21.182C84.35,147.422,61,202.083,61,257v8.188  C61,273.479,54.291,280.188,46,280.188z"/>
              <path style={{fill:"#57555C"}} d="M466,280.027c-8.291,0-15-6.709-15-15V257c0-54.917-23.35-109.578-64.072-146.521  c-6.123-5.552-6.592-15.044-1.025-21.182c5.596-6.138,15.059-6.577,21.182-1.025C454.047,130.869,481,193.646,481,257v8.027  C481,273.318,474.291,280.027,466,280.027z"/>
              <path style={{fill:"#B7E0F6"}} d="M437,392c-8.291,0-15-6.709-15-15V257c0-8.291,6.709-15,15-15c41.367,0,75,33.647,75,75  S478.367,392,437,392z"/>
              <path style={{fill:"#CAE8F9"}} d="M75,392c-41.367,0-75-33.647-75-75s33.633-75,75-75c8.291,0,15,6.709,15,15v120  C90,385.291,83.291,392,75,392z"/>
              <path style={{fill:"#1689FC"}} d="M316,512c-24.814,0-45-20.186-45-45s20.186-45,45-45s45,20.186,45,45S340.814,512,316,512z"/>
              <path style={{fill:"#18A7FC"}} d="M398.5,42.599C356.499,14.099,306.098,0,256,0c-50.398,0-100.8,14.099-142.5,42.599  C92.802,56.398,87.4,84.598,101.203,105c13.799,20.398,41.697,26.398,62.695,12.299C190.902,99,223.598,89.7,256,89.7  s65.098,9.3,92.102,27.599c20.698,13.799,48.596,8.399,62.695-12.299C424.6,84.598,419.198,56.398,398.5,42.599z"/>
              <path style={{fill:"#1689FC"}} d="M410.797,105c-14.099,20.698-41.997,26.098-62.695,12.299C321.098,99,288.402,89.7,256,89.7V0  c50.098,0,100.499,14.099,142.5,42.599C419.198,56.398,424.6,84.598,410.797,105z"/>
              <path style={{fill:"#18A7FC"}} d="M106,422c-24.814,0-45-20.186-45-45V257c0-24.814,20.186-45,45-45s45,20.186,45,45v120  C151,401.814,130.814,422,106,422z"/>
              <path style={{fill:"#1689FC"}} d="M406,422c-24.814,0-45-20.186-45-45V257c0-24.814,20.186-45,45-45s45,20.186,45,45v120  C451,401.814,430.814,422,406,422z"/>
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
  transition: ease 0.5s;
  overflow: auto;
  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  @media (max-width: 900px) {
    width: 80px;
  }
  button {
    background-color: Transparent;
    border: none;
    cursor: pointer;
    padding: 0;
  }
  .feedback{
    padding: 9px;
  }
  .feedback:hover{
    background-color: darkgrey;
    border-radius: 15%;
    transition: ease 0.5s;
    transform: scale(1.1);
  }
  button:hover {
    background-color: darkgrey;
    border-radius: 15%;
    transition: ease 0.5s;
    .svg-plus {
      stroke: blue;
      transition: ease 0.5s;
      transform: scale(1.3);
    }
  }
`;

export default SideBar;
