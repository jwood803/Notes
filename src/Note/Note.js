import React from 'react';

const note = props => {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>
        {props.details}
      </p>
    </div>
  );
};

export default note;