import React, {Component} from "react";
import {Navbar, NavItem, Nav, Image} from "react-bootstrap";
import NotesLogo from "../../../assets/logo.png";

class Toolbar extends Component {
  render() {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Image src={NotesLogo} />
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="/">
            Home
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={2} href="/">
            Favorites
          </NavItem>
          <NavItem eventKey={3} href="/">
            Profile
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Toolbar;