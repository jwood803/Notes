import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import {Button, ControlLabel, Form, FormControl, FormGroup, Row} from "react-bootstrap";
import "../../App.css";
import "./Authentication.css";
import {authenticationSuccess} from "../../store/actions/authenticationAction";

class Authentication extends Component {
  state = {
    username: "",
    password: ""
  };

  userNameOnChange = e => this.setState({username: e.target.value});
  passwordOnChange = e => this.setState({password: e.target.value});

  onAuthSubmit = (event, isSignUp) => {
    event.preventDefault();

    this.props.signUpUser(this.state.username, this.state.password, isSignUp);
  };

  render() {
    return (
      <Fragment>
        <Form inline className="pull-down">
          <FormGroup controlId="username">
            <ControlLabel>Username</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter username"
              onChange={this.userNameOnChange}/>
          </FormGroup>
          <FormGroup controlId="password">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              type="password"
              placeholder="Enter password"
              onChange={this.passwordOnChange} />
          </FormGroup>
          <Row>
            <Button
              bsStyle="primary"
              className="align-button"
              onClick={e => this.onAuthSubmit(e, true)}>
              Sign Up
            </Button>
            <Button
              bsStyle="primary"
              className="align-button"
              onClick={e => this.onAuthSubmit(e, false)}>
              Sign In
            </Button>
          </Row>
        </Form>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signUpUser: (username, password, isSignUp) => dispatch(authenticationSuccess(username, password, isSignUp))
  }
};

export default connect(null, mapDispatchToProps)(Authentication);