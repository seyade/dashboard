import React from 'react';
import './Card.scss';

const Card = (props) => {
  return (
    <div className="card" style={props.styles}>
      {props.children}
    </div>
  );
};

export default Card;
