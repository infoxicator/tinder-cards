import { combineReducers } from 'redux';
import actorsReducer from './actorsReducer';
import hiredActorsReducer from './hiredActorsReducer';

export default combineReducers({
  actors: actorsReducer,
  hiredActors: hiredActorsReducer,
});
