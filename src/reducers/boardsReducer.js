import { CONSTANTS } from '../actions';

let cardId = 13;

const initialState = [
  {
    id: 1,
    title: 'On hold',
    items: [
      { id: 1, title: 'Покушац' },
      { id: 2, title: 'Попыт' },
      { id: 3, title: 'Сделать канбан' },
    ],
  },
  {
    id: 2,
    title: 'In progress',
    items: [
      { id: 4, title: 'Почитать' },
      { id: 5, title: 'Подумать' },
      { id: 6, title: 'Погулять' },
    ],
  },
  {
    id: 3,
    title: 'Needs review',
    items: [
      { id: 7, title: 'Поработать' },
      { id: 8, title: 'Выкинуть мусор' },
      { id: 9, title: 'Прочитать ТЗ' },
    ],
  },
  {
    id: 4,
    title: 'Approved',
    items: [
      { id: 10, title: 'Поработать' },
      { id: 11, title: 'Выкинуть мусор' },
      { id: 12, title: 'Прочитать ТЗ' },
    ],
  },
];

const boardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_CARD: {
      const newCard = {
        id: cardId,
        title: action.payload.title,
      };
      cardId += 1;
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

      // в той же доске
      if (droppableIdStart === droppableIdEnd) {
        debugger;
        const board = state.find((board) => droppableIdStart === board.id);
        const card = board.items.splice(droppableIndexStart, 1);
        console.log(board);
        board.items.splice(droppableIndexEnd, 0, ...card);
      }

      return newState;

    default:
      return state;
  }
};

export default boardsReducer;
