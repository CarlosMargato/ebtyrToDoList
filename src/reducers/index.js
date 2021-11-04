import { combineReducers } from 'redux';
import user from './user';
import tasks from './forms';

const rootReducer = combineReducers({
  user,
  tasks,
});

export default rootReducer;