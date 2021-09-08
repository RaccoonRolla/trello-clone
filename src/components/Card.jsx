import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Card = ({ cardId, title, cardIndex }) => {
  return (
    <Draggable draggableId={String(cardId)} index={cardIndex}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="card">
          <div>
            <b>Id: </b>
            {cardId}
          </div>
          <div className="card-title">{title}</div>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
