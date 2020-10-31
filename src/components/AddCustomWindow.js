import React, { Component } from "react";
import Modal from "react-modal";
const electron = window.require("electron");
const ipcRenderer = electron.ipcRenderer;

Modal.setAppElement("#root");
export class AddCustomWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: " ",
      link: " ",
      modalIsOpen: true
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
    this.closeModal();
    this.props.refreshOnSubmitInAddCustomWindow(e, this.state.link);

    //This code below is just for vhecking purpose ... Delete it at last
    // ipcRenderer.send("Time to Check LocalStorage", "hi");
    // window.close();
    // let window = remote.getCurrentWindow();
  };

  closeModal = () => {
    this.setState({
      ...this.state,
      modalIsOpen: false
    });
  };

  componentDidMount() {}

  render() {
    let { modalIsOpen } = this.state;

    return (
      <>
        <Modal isOpen={modalIsOpen}>
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
          <button onClick={this.closeModal}>Close</button>
        </Modal>
      </>
    );
  }
}

export default AddCustomWindow;
