import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import {Button, ControlLabel, Form, FormControl, FormGroup} from "react-bootstrap";
import "../../App.css";
import {authenticationSuccess} from "../../store/actions/authenticationAction";

class Authentication extends Component {
  state = {
    username: "",
    password: ""
  };

  userNameOnChange = e => this.setState({username: e.target.value});
  passwordOnChange = e => this.setState({password: e.target.value});

  onAuthSubmit = event => {
    event.preventDefault();

    this.props.signUpUser(this.state.username, this.state.password);
  };

  render() {
    return (
      <Fragment>
        <Form inline className="pull-down" onSubmit={this.onAuthSubmit}>
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
          <Button bsStyle="primary" type="submit">
            Sign in
          </Button>
        </Form>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.username,
    password: state.password
  }
};

const mapDispatchToProps = dispatch => {
  return {
    signUpUser: (username, password) => dispatch(authenticationSuccess(username, password))
  }
};

export default connect(null, mapDispatchToProps)(Authentication);