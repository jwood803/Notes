import React, {Component, Fragment} from "react";

export class EditNote extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <Fragment>
        <p className="pull-down">Edit note</p>
      </Fragment>
    );
  }
}