import React, {Component} from "react";
import {authenticationLogout} from "../../../store/actions/authenticationAction";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

class Logout extends Component {
  componentDidMount() {
    this.props.onLogout();
  }

  render() {
    return (
      <Redirect to="/"/>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(authenticationLogout())
  }
};

export default connect(null, mapDispatchToProps)(Logout);