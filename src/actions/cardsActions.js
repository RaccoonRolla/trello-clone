import { CONSTANTS } from '.';
import { cardsAPI } from '../API/kanbanAPI';

export const addCard = (boardId, cardTitle, cardId) => {
  return {
    type: CONSTANTS.ADD_CARD,
    payload: { boardId, cardTitle, cardId },
  };
};

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
) => {
  return {
    type: CONSTANTS.DRAG_HAPPENED,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
      draggableId,
    },
  };
};

export const setBoards = (boards) => {
  debugger;
  return {
    type: CONSTANTS.SET_BOARDS,
    payload: boards,
  };
};

export const deleteCard = (cardId) => {
  return { type: CONSTANTS.DELETE_CARD, payload: { cardId } };
};

export const getCards = () => {
  return (dispatch) => {
    cardsAPI.getCards().then((response) => {
      dispatch(setBoards(response.data));
    });
  };
};

export const addNewCard = (boardId, cardTitle) => (dispatch) => {
  cardsAPI.addCard(boardId, cardTitle).then((response) => {
    dispatch(addCard(response.data.row, response.data.text, response.data.id));
  });
};
