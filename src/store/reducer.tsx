import { combineReducers } from 'redux-immutable';
import { reducer as recommendReducer } from '@/pages/discover/c-pages/recommend/store';
import { reducer as userReducer } from '@/pages/discover/c-pages/recommend/store';

const cReducer = combineReducers({
  recommend: recommendReducer,
  user: userReducer
});

export default cReducer;