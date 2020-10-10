import React, { Component } from "react";
import './components/mystyle.css';
import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";
import "./index.css";

const sideBarData = [
  {
    label: "Invide Labs",
    link: "https://app.invidelabs.com",
    image: "https://www.invidelabs.com/imgs/logo.png",
  },
  {
    label: "Slack",
    link: "https://slack.com/workspace-signin",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
  },
  {
    label: "Microsoft Teams",
    link: "https://teams.microsoft.com/",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/512px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png",
  },
  {
    label: "Trello",
    link: "https://trello.com/",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Antu_trello.svg/1200px-Antu_trello.svg.png",
  },
  {
    label: "WhatsApp",
    link: "https://web.whatsapp.com/",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/WhatsApp_logo-color-vertical.svg/50px-WhatsApp_logo-color-vertical.svg.png",
  },
];

class App extends Component {
  state = {
    activeLink: "https://app.invidelabs.com",
  };

  setActiveLink = (e, activeLink) => {
    e.preventDefault();
    this.setState({
      activeLink,
    });
  };

  componentDidMount() {}

  render() {
    return (
      <div className="mainwrapper">
        <SideBar
          sideBarData={sideBarData}
          setActiveLink={this.setActiveLink}
        />
        <MainContent activeLink={this.state.activeLink} />
      </div>
    );
  }
}


export default App;
