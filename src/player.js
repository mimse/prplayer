import React from 'react';
import { render } from 'react-dom';
import Main from './containers/main';
import { Provider } from 'react-redux';
import store from './store';

const player = (
 <Provider store={store}>
  <Main />
 </Provider>
)

render(player, document.getElementById('root'));
