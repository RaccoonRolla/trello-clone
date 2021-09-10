import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { addNewCard } from '../actions/cardsActions';
import { connect } from 'react-redux';

//создан отдельный компонент с расчетом на использование в будущем для добавления новых досок
const KanbanActionButton = ({ boardId, ...props }) => {
  const [formOpen, setFormOpen] = useState(false);
  const [text, setText] = useState('');

  const handeInputChange = (e) => {
    setText(e.target.value);
  };

  const handleAddCard = () => {
    const { dispatch } = props;

    if (text) {
      dispatch(addNewCard(boardId, text));
    }
    setText('');
    setFormOpen(!formOpen);

    return;
  };
  return (
    <div className="addCardButton">
      {!formOpen ? (
        <div className="addCard" onClick={() => setFormOpen(!formOpen)}>
          <img src="../media/img/plus_button.svg" alt="Plus" />
          <div>Add card</div>
        </div>
      ) : (
        <div className="cardForm">
          <TextareaAutosize
            placeholder="Enter title for this card"
            autoFocus
            value={text}
            onChange={handeInputChange}
            style={{
              resize: 'none',
              width: '100%',
              overflow: 'hidden',
              outline: 'none',
              border: 'none',
              backgroundColor: '#505050',
            }}
            minRows={7}
          />
          <div className="formButtonGroup">
            <button onClick={handleAddCard}>Add card</button>
            <img
              src="../media/img/close_button.svg"
              alt="Close"
              onClick={() => setFormOpen(!formOpen)}
              style={{ marginLeft: '10px' }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default connect()(KanbanActionButton);
