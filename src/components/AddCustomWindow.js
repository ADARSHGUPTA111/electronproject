import React, { Component } from "react";
import NewWindow from "react-new-window";

export class AddCustomWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: " ",
      link: " "
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
  };
  render() {
    // let { openNewWindow } = this.props;
    // console.log(openNewWindow);

    return (
      <NewWindow
        features={{
          width: 600,
          height: 480
        }}
      >
        <h1>Hello!</h1>
        <form onSubmit={this.setToLocalStorage}>
          <label>
            Name of App:
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
    );
  }
}

export default AddCustomWindow;
