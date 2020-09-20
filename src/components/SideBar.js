import React, { Component } from "react";
import styled from "styled-components";

export class SideBar extends Component {
  render() {
    let { sideBarData, setActiveLink } = this.props;
    return (
      <>
        <SideMenu>
          {sideBarData.map((eachLink) => {
            return (
              <Label href="" onClick={(e) => setActiveLink(e, eachLink.link)}>
                <img src={eachLink.image} />
              </Label>
            );
          })}
        </SideMenu>
      </>
    );
  }
}

const Label = styled.a`
  display: block;
  padding: 3px 3px;
  margin: 5px 5px;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const SideMenu = styled.div`
  width: 50px;
  height: 100vh;
  background-color: #f9cdc4;
  overflow: hidden;
`;
export default SideBar;
