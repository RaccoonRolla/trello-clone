import * as axios from 'axios';

const kanbanTestInstance = axios.create({
  baseURL: 'https://trello.backend.tests.nekidaem.ru/api/v1/',
  headers: {
    Authorization: `JWT ${localStorage.token}`,
  },
});

export const cardsAPI = {
  getCards() {
    return kanbanTestInstance.get('cards/');
  },
  addCard(boardId, cardTitle) {
    return kanbanTestInstance.post('cards/', { row: boardId, text: cardTitle });
  },
  deleteCard(cardId) {
    return kanbanTestInstance.delete(`cards/${cardId}`);
  },
  updateCard(cardId, boardId) {
    return kanbanTestInstance.patch(`cards/${cardId}/`, { row: boardId });
  },
};

export const authAPI = {
  getToken() {
    return axios.post('https://trello.backend.tests.nekidaem.ru/api/v1/users/login/', {
      username: 'RaccoonRolla',
      password: 'yND,_K)96X',
    });
  },
};
