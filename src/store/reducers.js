import { ACTION_CHANGE_FIRST_NAME, ACTION_CHANGE_SECOND_NAME } from '../index.js';

const initialState = { // создали изначальный стейт
  firstName: 'Oleg',
  secondName: 'Gromov'
}


export const rootReducer = (state = initialState, action) => { // создали главный reducer и передали туда state и action, в state передали изначальный state
  switch (action.type) {
    case ACTION_CHANGE_FIRST_NAME:
      return { ...state, firstName: action.payload }; // меняем в state firstName на payload из action

    case ACTION_CHANGE_SECOND_NAME:
      return { ...state, secondName: action.payload }; // меняем в state firstName на payload из action
  }
  return state; // reducer всегда должен что-то возвращать
};