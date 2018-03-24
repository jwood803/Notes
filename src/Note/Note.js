import React from 'react';

const note = props => {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>
        {props.details}
      </p>
      <button className="btn btn-primary" onClick={props.addNote}>Add Note</button>
    </div>
  );
};

export default note;