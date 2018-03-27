import React from "react";
import {Modal, Button} from "react-bootstrap";

const addNote = props => {
  let {
    showModal,
    closeModal,
    addNote
  } = props;

  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header>
        <Modal.Title>Add New Note</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        TODO: Add note form
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={closeModal}>Close</Button>
        <Button bsStyle="primary" onClick={() => addNote({title: "New title", details: "New details", rating: 3})}>Save note</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default addNote;