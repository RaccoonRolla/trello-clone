import React from 'react';

const Card = ({ id, title }) => {
  return (
    <div className="card">
      <div>
        <b>Id:</b>
        {id}
      </div>
      <div>{title}</div>
    </div>
  );
};

export default Card;
