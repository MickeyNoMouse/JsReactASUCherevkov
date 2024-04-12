import { combineReducers } from 'redux';
import counterReducer from './reducers'; 
import searchReducer from './reducers'; 

const rootReducer = combineReducers({
  counter: counterReducer, 
  search: searchReducer 
});

export default rootReducer;