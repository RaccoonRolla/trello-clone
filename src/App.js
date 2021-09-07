import React, { useState } from 'react';

import './App.css';

function App() {
  const [boards, setBoards] = useState([
    {
      id: 1,
      title: 'Сделать',
      items: [
        { id: 1, title: 'Покушац' },
        { id: 2, title: 'Попыт' },
        { id: 3, title: 'Сделать канбан' },
      ],
    },
    {
      id: 2,
      title: 'Возможно сделать',
      items: [
        { id: 4, title: 'Почитать' },
        { id: 5, title: 'Подумать' },
        { id: 6, title: 'Погулять' },
      ],
    },
    {
      id: 3,
      title: 'Сделано',
      items: [
        { id: 7, title: 'Поработать' },
        { id: 8, title: 'Выкинуть мусор' },
        { id: 8, title: 'Прочитать ТЗ' },
      ],
    },
  ]);

  const [currentBoard, setCurrentBoard] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);

  const dragOverHandler = (e) => {
    e.preventDefault();
    if (e.target.className === 'item') {
      e.target.style.boxShadow = '0 2px 3px gray';
    }
  };

  const dragLeaveHandler = (e) => {
    e.target.style.boxShadow = 'none';
  };

  const dragStartHangler = (e, board, item) => {
    setCurrentBoard(board);
    setCurrentItem(item);
  };

  const dragEndHandler = (e) => {
    e.target.style.boxShadow = 'none';
  };

  const dropHandler = (e, board, item) => {
    e.preventDefault();
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);
    const dropIndex = board.items.indexOf(item);
    board.items.splice(dropIndex + 1, 0, currentItem);
    setBoards(
      boards.map((b) => {
        if (b.id === board.id) {
          return board;
        }
        if (b.id === currentBoard.id) {
          return currentBoard;
        }
        return b;
      }),
    );
  };

  const dropCardHandler = (e, board) => {
    board.items.push(currentItem);
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);
    setBoards(
      boards.map((b) => {
        if (b.id === board.id) {
          return board;
        }
        if (b.id === currentBoard.id) {
          return currentBoard;
        }
        return b;
      }),
    );
  };

  return (
    <div className="app">
      {boards.map((board) => (
        <div
          className="board"
          onDragOver={(e) => dragOverHandler(e)}
          onDrop={(e) => dropCardHandler(e, board)}>
          <div className="board__title">{board.title}</div>
          {board.items.map((item) => (
            <div
              onDragOver={(e) => dragOverHandler(e)}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDragStart={(e) => dragStartHangler(e, board, item)}
              onDragEnd={(e) => dragEndHandler(e)}
              onDrop={(e) => dropHandler(e, board, item)}
              draggable={true}
              className="item">
              {item.title}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
