const initialState = [
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
];

const boardsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default boardsReducer;
