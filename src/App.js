import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';

import Board from './components/Board';

import './App.scss';
import { sort, getCards, moveCard } from './actions/cardsActions';
import Loader from 'react-loader-spinner';
import { authAPI } from './API/kanbanAPI';

function App({ boards, sort, getCards, moveCard, ...props }) {
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    authAPI.getToken().then((response) => localStorage.setItem('token', response.data.token));
  }, []);

  useEffect(() => {
    setFetching(true);
    getCards();
    return setFetching(false);
  }, [getCards, moveCard]);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    moveCard(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId,
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd} className="container">
      {fetching ? (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#373b40',
          }}>
          <Loader type="Puff" color="#00BFFF" height={100} width={100} />
        </div>
      ) : (
        <div className="app">
          {boards.map((b) => (
            <Board key={b.id} title={b.title} items={b.items} boardId={b.id} />
          ))}
        </div>
      )}
    </DragDropContext>
  );
}

const mapStateToProps = (state) => ({
  boards: state.boards,
});

export default connect(mapStateToProps, { sort, getCards, moveCard })(App);
