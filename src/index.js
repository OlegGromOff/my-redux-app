import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './store/reducers';
import MainComponent from './components/MainComponent'

export const ACTION_CHANGE_FIRST_NAME = 'ACTION_CHANGE_FIRST_NAME'; //создали переменную action со строковым значением
export const ACTION_CHANGE_SECOND_NAME = 'ACTION_CHANGE_SECOND_NAME'; //создали переменную action со строковым значением


const store = createStore(rootReducer); // создали store и передали туда rootReducer

ReactDOM.render(<Provider store={store}><MainComponent /></Provider>,
  document.getElementById('root')
  // Provider - обертка редакса и в нее перeдаем в пропсы store
);


