import { combineReducers } from 'redux';
import counterReducer from './reducers'; 
import searchReducer from './reducers'; 
import { productsApi } from '../components/rtk/api';
import { configureStore } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({ 
  counter: counterReducer, 
  search: searchReducer,
  
}
);

const store = configureStore({
  reducer:{rootReducer, [productsApi.reducerPath]: productsApi.reducer, } ,
  
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
})

export default store;