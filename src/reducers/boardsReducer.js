import { CONSTANTS } from '../actions';

let cardId = 13;

const initialState = [
  {
    id: '0',
    title: 'On hold',
    items: [
      // { id: 1, title: 'Покушац' },
      // { id: 2, title: 'Попыт' },
      // { id: 3, title: 'Сделать канбан' },
    ],
  },
  {
    id: '1',
    title: 'In progress',
    items: [
      // { id: 4, title: 'Почитать' },
      // { id: 5, title: 'Подумать' },
      // { id: 6, title: 'Погулять' },
    ],
  },
  {
    id: '2',
    title: 'Needs review',
    items: [
      // { id: 7, title: 'Поработать' },
      // { id: 8, title: 'Выкинуть мусор' },
      // { id: 9, title: 'Прочитать ТЗ' },
    ],
  },
  {
    id: '3',
    title: 'Approved',
    items: [
      // { id: 10, title: 'Поработать' },
      // { id: 11, title: 'Выкинуть мусор' },
      // { id: 12, title: 'Прочитать ТЗ' },
    ],
  },
];

const boardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_CARD: {
      const newCard = {
        id: action.payload.cardId,
        title: action.payload.cardTitle,
      };
      const newState = state.map((board) => {
        if (board.id === action.payload.boardId) {
          return {
            ...board,
            items: [...board.items, newCard],
          };
        } else {
          return board;
        }
      });

      return newState;
    }

    case CONSTANTS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
      } = action.payload;
      const newState = [...state];
      debugger;

      // в той же доске
      if (droppableIdStart === droppableIdEnd) {
        const board = state.find((board) => droppableIdStart === board.id);
        const card = board.items.splice(droppableIndexStart, 1);
        board.items.splice(droppableIndexEnd, 0, ...card);
      }

      //в другой доске
      if (droppableIdStart !== droppableIdEnd) {
        const boardStart = state.find((board) => droppableIdStart === board.id);
        const boardEnd = state.find((board) => droppableIdEnd === board.id);
        const card = boardStart.items.splice(droppableIndexStart, 1);
        boardEnd.items.splice(droppableIndexEnd, 0, ...card);
      }

      return newState;

    case CONSTANTS.DELETE_CARD: {
      debugger;
      const newState = state.map((board) => {
        if (board.id === action.payload.boardId) {
          return {
            ...board,
            items: board.items.filter((item) => item.id !== action.payload.cardId),
          };
        } else {
          return board;
        }
      });
      return newState;
    }

    case CONSTANTS.SET_BOARDS:
      return state.map((board) => {
        board.items = action.payload
          .filter((item) => item.row === board.id)
          .map((item) => ({ id: item.id, title: item.text }));
        return board;
      });

    default:
      return state;
  }
};

export default boardsReducer;
