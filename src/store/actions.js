import { ACTION_CHANGE_FIRST_NAME, ACTION_CHANGE_SECOND_NAME } from '../index';

export const changeFirstName = (newFirstName) => { // action creator, экшены должы передаваться в dispatch через action creator
  // тут newFirstName просто строка
  return {
    type: ACTION_CHANGE_FIRST_NAME, // тип
    payload: newFirstName // новое значение
  }
}

export const changeSecondName = (newSecondName) => { // action creator, экшены должы передаваться в dispatch через action creator
  // тут newSecondName просто строка
  return {
    type: ACTION_CHANGE_SECOND_NAME, // тип
    payload: newSecondName // новое значение
  }
}