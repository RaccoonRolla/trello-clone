import * as axios from 'axios';

const kanbanTestInstance = axios.create({
  baseURL: 'https://trello.backend.tests.nekidaem.ru/api/v1/',
  headers: {
    Authorization:
      'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo4MjYsInVzZXJuYW1lIjoiUmFjY29vblJvbGxhIiwiZXhwIjoxNjMxMjU5MjM3LCJlbWFpbCI6Imdhc3BhcmRoZW5yeUBnbWFpbC5jb20iLCJvcmlnX2lhdCI6MTYzMTI1NTYzN30.XXynqsj2i29jtJgATh6acnUlQ0OSUP05TA9cersdx08',
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
};
