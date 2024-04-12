import { combineReducers } from 'redux';
import { INCREMENT_COUNTER, DECREMENT_COUNTER, SET_SEARCH } from './actions';


const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        count: state.count + 1
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
};


const searchReducer = (state = { searchResult: null }, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        searchResult: action.payload
      };
    default:
      return state;
  }
};


const rootReducer = combineReducers({
  counter: counterReducer,
  search: searchReducer
});

export default rootReducer;