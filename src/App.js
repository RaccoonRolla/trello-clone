import React from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';

import Board from './components/Board';

import './App.scss';
import { sort } from './actions/cardsActions';

function App({ boards, ...props }) {
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }
    props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
      ),
    );
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

export default connect(mapStateToProps)(App);
