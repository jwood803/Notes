import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import {Button, ControlLabel, Form, FormControl, FormGroup} from "react-bootstrap";

class Authentication extends Component {
  state = {
    username: "",
    password: ""
  };

  userNameOnChange = e => this.setState({title: e.target.value});
  passwordOnChange = e => this.setState({details: e.target.value});

  render() {
    return (
      <Fragment>
        <Form>
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
          <Button bsStyle="primary">Sign in</Button>
        </Form>
      </Fragment>
    );
  }
}

export default connect()(Authentication);