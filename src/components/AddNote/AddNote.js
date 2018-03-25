import React from "react";
import {Modal, Button} from "react-bootstrap";

const addNote = props => {
  let {
    showModal,
    closeModal
  } = props;

  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>One fine body...</Modal.Body>
      <Modal.Footer>
        <Button>Close</Button>
        <Button bsStyle="primary">Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default addNote;