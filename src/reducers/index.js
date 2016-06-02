
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import play from './play';

const rootReducer = combineReducers({ play });

export default rootReducer;