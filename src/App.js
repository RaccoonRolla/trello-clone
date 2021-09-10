import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';

import Board from './components/Board';
import { cardsAPI } from './API/kanbanAPI';

import './App.scss';
import { sort, getCards } from './actions/cardsActions';

function App({ boards, sort, getCards, ...props }) {
  useEffect(() => {
    getCards();
  }, [getCards]);
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    sort(source.droppableId, destination.droppableId, source.index, destination.index, draggableId);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="app">
        {boards.map((b) => (
          <Board key={b.id} title={b.title} items={b.items} boardId={b.id} />
        ))}
      </div>
    </DragDropContext>
  );
}

const mapStateToProps = (state) => ({
  boards: state.boards,
});

export default connect(mapStateToProps, { sort, getCards })(App);
