import React from 'react';
import Card from './Card';

const Board = ({ title, items }) => {
  return (
    <div className="board">
      <div className="board__title">{title + ' (' + items.length + ')'}</div>
      {items.map((c) => (
        <Card id={c.id} title={c.title} />
      ))}
    </div>
  );
};

export default Board;
