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

  let FieldGroup = ({ id, label, help, ...props }) => {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
      </FormGroup>
    );
  };

  let form = (
    <Form>
      <FieldGroup
        id="title"
        type="text"
        label="Book Title"
        placeholder="Enter text"
      />
      <FormGroup controlId="noteDetails">
        <ControlLabel>Note Details</ControlLabel>
        <FormControl componentClass="textarea" placeholder="textarea" />
      </FormGroup>
      <FormGroup>
        {
          _times(RATING_COUNT, cnt => {
            return (
            <Radio name="radioGroup" inline>
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