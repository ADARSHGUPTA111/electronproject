import React, { Component } from "react";
import Modal from "react-modal";
import styled from "styled-components";
// import "./formCSS.css";
//const electron = window.require("electron");
//const ipcRenderer = electron.ipcRenderer;

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: " #f2f2f2",
    borderRadius: "4px",
    padding: "20px"
  }
};

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
      link: this.state.link,
      restoredLink: this.state.link,
      count: 0
    };
    const sideBarData = JSON.parse(localStorage.getItem("sideBarData")) || [];
    sideBarData.push(newApp);
    localStorage.setItem("sideBarData", JSON.stringify(sideBarData));
    this.closeModal();
    this.props.refreshOnSubmitInAddCustomWindow(
      e,
      this.state.link,
      this.state.label
    );

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
        <Modal style={customStyles} isOpen={modalIsOpen}>
          <h1 style={{ textAlign: "center", fontSize: "40px" }}>
            Add Your Own Custom App
          </h1>
          <br />
          <StyledForm onSubmit={this.setToLocalStorage}>
            <label htmlFor="label">Name of App:</label>
            <input
              type="text"
              id="label"
              name="label"
              placeholder="App Name"
              value={this.state.value}
              onChange={this.handleInputChange}
              required
            />
            <label htmlFor="link"> Link for App :</label>
            <input
              type="text"
              id="link"
              name="link"
              placeholder="link to website"
              value={this.state.value}
              onChange={this.handleInputChange}
              required
            />
            <input type="submit" value="Submit" />
            &nbsp;
            <button className="close" onClick={this.closeModal}>
              Close
            </button>
          </StyledForm>
        </Modal>
      </>
    );
  }
}

const StyledForm = styled.form`
  input[type="text"] {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
  }

  input[type="submit"] {
    background-color: #4caf50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  input[type="submit"]:hover {
    background-color: #06ec12;
  }

  .close {
    background-color: #8b1e1e;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .close:hover {
    background-color: red;
  }
`;

export default AddCustomWindow;
