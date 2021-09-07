import React from 'react';
import { connect } from 'react-redux';

import Board from './components/Board';

import './App.css';

function App({ boards, ...props }) {
  return (
    <div className="app">
      {boards.map((b) => (
        <Board title={b.title} items={b.items} />
      ))}
      ;
    </div>
  );
}

const mapStateToProps = (state) => ({
  boards: state.boards,
});

export default connect(mapStateToProps)(App);
