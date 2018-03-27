import React from "react";
import {Modal, Button, Form, FormGroup, ControlLabel, FormControl, Radio, Checkbox} from "react-bootstrap";
import _times from "lodash/times";

const addNote = props => {
  let {
    showModal,
    closeModal,
    addNote
  } = props;

  const RATING_COUNT = 5;

  let form = (
    <Form>
      <FormGroup controlId="title">
        <ControlLabel>Book Title</ControlLabel>
        <FormControl type="text" placeholder="Enter text"/>
      </FormGroup>
      <FormGroup controlId="noteDetails">
        <ControlLabel>Note Details</ControlLabel>
        <FormControl componentClass="textarea" placeholder="Enter text" />
      </FormGroup>
      <FormGroup>
        {
          _times(RATING_COUNT, cnt => {
            return (
            <Radio key={cnt} name="radioGroup" inline>
              {cnt + 1}
            </Radio>)
          })
        }
      </FormGroup>
      <Checkbox>
        Favorite?
      </Checkbox>
    </Form>
  );

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
        <Button bsStyle="primary" onClick={() => addNote({title: "New title", details: "New details", rating: 3})}>Save note</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default addNote;