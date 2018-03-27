import React, {Component} from "react";
import {Modal, Button, Form, FormGroup, ControlLabel, FormControl, Radio, Checkbox} from "react-bootstrap";
import _times from "lodash/times";

export class AddNote extends Component {
  state = {
    title: "",
    details: "",
    rating: "",
    favorite: false
  };

  titleOnChange = e => this.setState({title: e.target.value});
  detailsOnChange = e => this.setState({details: e.target.value});
  ratingOnChange = e => this.setState({rating: e.target.value});
  favoriteOnChange = e => this.setState({favorite: e.target.checked});

  render() {
    let {
      showModal,
      closeModal,
      addNote
    } = this.props;

    const RATING_COUNT = 5;

    let form = (
      <Form>
        <FormGroup controlId="title">
          <ControlLabel>Book Title</ControlLabel>
          <FormControl type="text" placeholder="Enter text" onChange={this.titleOnChange}/>
        </FormGroup>
        <FormGroup controlId="noteDetails">
          <ControlLabel>Note Details</ControlLabel>
          <FormControl componentClass="textarea" placeholder="Enter text" onChange={this.detailsOnChange} />
        </FormGroup>
        <FormGroup style={{marginBottom: "0px"}}>
          <ControlLabel>Book rating</ControlLabel>
        </FormGroup>
        <FormGroup>
          {
            _times(RATING_COUNT, cnt => {
              let count = cnt + 1;

              return (
                <Radio
                  value={count}
                  key={cnt}
                  name="rating"
                  inline
                  checked={this.state.rating === count.toString()}
                  onChange={this.ratingOnChange}>{count}
                </Radio>)
            })
          }
        </FormGroup>
        <Checkbox onChange={this.favoriteOnChange}>
          Favorite?
        </Checkbox>
      </Form>
    );

    const note = {
      ...this.state
    };

    return (
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header>
          <Modal.Title>Add New Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {form}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeModal}>Close</Button>
          <Button bsStyle="primary" onClick={() => addNote(note)}>Save note</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}