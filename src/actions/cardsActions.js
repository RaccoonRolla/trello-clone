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
  return {
    type: CONSTANTS.SET_BOARDS,
    payload: boards,
  };
};

export const deleteCard = (cardId, boardId) => {
  return { type: CONSTANTS.DELETE_CARD, payload: { cardId, boardId } };
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

export const deleteCardFromBack = (cardId, boardId) => (dispatch) => {
  cardsAPI.deleteCard(cardId).then(() => {
    dispatch(deleteCard(cardId, boardId));
  });
};

export const moveCard =
  (droppableIdStart, droppableIdEnd, droppableIndexStart, droppableIndexEnd, draggableId) =>
  (dispatch) => {
    debugger;
    cardsAPI.updateCard(draggableId, droppableIdEnd).then(() => {
      dispatch(
        sort(droppableIdStart, droppableIdEnd, droppableIndexStart, droppableIndexEnd, draggableId),
      );
    });
  };
