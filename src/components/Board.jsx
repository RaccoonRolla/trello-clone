import React from 'react';
import Card from './Card';
import KanbanActionButton from './KanbanActionButton';
import { Droppable } from 'react-beautiful-dnd';

const Board = ({ title, items, boardId }) => {
  return (
    <Droppable droppableId={String(boardId)}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef} className="board">
          <div
            className="board__title"
            style={
              boardId === 1
                ? { backgroundColor: '#ed854a' }
                : boardId === 2
                ? { backgroundColor: '#4191ba' }
                : boardId === 3
                ? { backgroundColor: '#f0cc56' }
                : boardId === 4
                ? { backgroundColor: '#52b269' }
                : { backgroundColor: '#2f3137' }
            }>
            <div>{title + ' (' + items.length + ')'}</div>
          </div>
          {items.map((c, index) => (
            <Card key={c.id} cardId={c.id} title={c.title} cardIndex={index} />
          ))}
          {provided.placeholder}
          <KanbanActionButton boardId={boardId} />
        </div>
      )}
    </Droppable>
  );
};

export default Board;
