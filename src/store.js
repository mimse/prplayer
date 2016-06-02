import { createStore, compose } from 'redux';
import rootReducer from './reducers';

const defaultState = {
  play: false
  // paused: false,
  // seeking: false,
  // seeked: false,
  // stopped: false,
  // loading:false
};

const store = createStore(rootReducer, defaultState);

if(module.hot) {
  module.hot.accept('./reducers/',() => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;