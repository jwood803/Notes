import React from "react";
import {Modal, Button} from "react-bootstrap";

const deleteNote = props => {
  let {
    showModal,
    closeModal,
    title,
    id,
    deleteNote
  } = props;

  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header>
        <Modal.Title>Delete Note</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure you want to delete notes for <strong>{title}</strong>?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={closeModal}>Close</Button>
        <Button bsStyle="danger" onClick={() => deleteNote(id)}>Delete note</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default deleteNote;