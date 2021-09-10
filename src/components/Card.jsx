import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import { deleteCardFromBack } from '../actions/cardsActions';

const Card = ({ cardId, title, cardIndex, boardId, deleteCardFromBack, ...props }) => {
  const handleDeleteCard = () => {
    deleteCardFromBack(cardId, boardId);
  };
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
          <img
            onClick={handleDeleteCard}
            src="../media/img/close_button.svg"
            alt="Close"
            style={{ marginLeft: '10px' }}
          />
          <div className="card-title">{title}</div>
        </div>
      )}
    </Draggable>
  );
};

const mapStateToProps = (state) => ({
  boards: state.boards.items,
});

export default connect(mapStateToProps, { deleteCardFromBack })(Card);
