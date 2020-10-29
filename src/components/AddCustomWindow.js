import React, { Component } from "react";
import NewWindow from "react-new-window";
const electron = window.require("electron");
const remote = electron.remote;
const ipcRenderer = electron.ipcRenderer;

export class AddCustomWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: " ",
      link: " ",
      openNewWindow: true
    };
  }
  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };
  setToLocalStorage = e => {
    e.preventDefault();
    const newApp = {
      label: this.state.label,
      link: this.state.link
    };
    const sideBarData = JSON.parse(localStorage.getItem("sideBarData")) || [];
    sideBarData.push(newApp);
    localStorage.setItem("sideBarData", JSON.stringify(sideBarData));
    this.setState({
      ...this.state,
      openNewWindow: false
    });

    this.props.refreshOnSubmitInAddCustomWindow(e, this.state.link);

    //This code below is just for vhecking purpose ... Delete it at last
    // ipcRenderer.send("Time to Check LocalStorage", "hi");
    // window.close();
    // let window = remote.getCurrentWindow();
  };

  componentDidMount() {
    let window = remote.getCurrentWindow();
    // console.log(window);
  }

  render() {
    let { openNewWindow } = this.state;

    return (
      <>
        {openNewWindow && (
          <NewWindow
            features={{
              width: 600,
              height: 480
            }}
            copyStyles={false}
          >
            <h1>Hello!</h1>
            <form onSubmit={this.setToLocalStorage}>
              <label>
                Name of Apps:
                <input
                  type="text"
                  name="label"
                  value={this.state.value}
                  onChange={this.handleInputChange}
                />
              </label>
              <label>
                Link for App :
                <input
                  type="text"
                  name="link"
                  value={this.state.value}
                  onChange={this.handleInputChange}
                />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </NewWindow>
        )}
      </>
    );
  }
}

export default AddCustomWindow;
