import React, {Component} from "react";
import {Navbar, NavItem, Nav, Image} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import NotesLogo from "../../../assets/logo.png";
import {connect} from "react-redux";

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
          <LinkContainer to="/">
            <NavItem eventKey={1}>
              Home
            </NavItem>
          </LinkContainer>
        </Nav>
        <Nav pullRight>
          {this.props.isAuthenticated ?
            <LinkContainer to="/logout">
              <NavItem eventKey={2}>
                Log Out
              </NavItem>
            </LinkContainer>:
            <LinkContainer to="/signup">
              <NavItem eventKey={2}>
                Sign Up
              </NavItem>
            </LinkContainer> }
        </Nav>
        <Nav pullRight>
          <LinkContainer to="/profile">
            <NavItem eventKey={3}>
              Profile
            </NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
};

export default connect(mapStateToProps)(Toolbar);