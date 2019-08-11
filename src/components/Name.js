import React from 'react';

export default function Name(props) {
  return (
    <div
      onClick={() => props.handleChosen(props.id, props.name)}
      className={`list-name ${props.isChosen ? 'chosen' : ''}`}
    >
      {props.name}
    </div>
  );
}
