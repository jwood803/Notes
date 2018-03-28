import React, {Component} from "react";
import {
  ControlLabel,
  Form,
  FormControl,
  FormGroup,
  Radio,
  Modal,
  Button, Checkbox
} from "react-bootstrap";
import "./EditNote.css";
import _times from "lodash/times";

export class EditNote extends Component {
  state = {
    title: "",
    details: "",
    rating: "",
    favorite: false
  };

  componentDidMount() {
    const note = this.props.note;

    if(note) {
      this.setState({
        title: note.title,
        details: note.details,
        rating: note.rating,
        favorite: note.favorite
      });
    }
  }

  titleOnChange = e => {
    this.setState({title: e.target.value});
  };

  detailsOnChange = e => this.setState({details: e.target.value});
  ratingOnChange = e => this.setState({rating: e.target.value});
  favoriteOnChange = e => this.setState({favorite: e.target.checked});

  render() {
    let {
      showModal,
      closeModal,
      updateNote,
    } = this.props;

    const RATING_COUNT = 5;

    let form = (
      <Form>
        <FormGroup controlId="title">
          <ControlLabel>Title</ControlLabel>
          <FormControl
            type="text"
            value={this.state && this.state.title}
            onChange={this.titleOnChange}/>
        </FormGroup>
        <FormGroup controlId="details">
          <ControlLabel>Details</ControlLabel>
          <FormControl
            componentClass="textarea"
            value={this.state && this.state.details}
            onChange={this.detailsOnChange}/>
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
                  checked={this.state && this.state.rating === count.toString()}
                  onChange={this.ratingOnChange}>{count}
                </Radio>)
            })
          }
        </FormGroup>
        <Checkbox
          onChange={this.favoriteOnChange}
          checked={this.state && this.state.favorite}>
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
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {form}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeModal}>Close</Button>
          <Button bsStyle="primary" onClick={() => updateNote(note)}>Update note</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}