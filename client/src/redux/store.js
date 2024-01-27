import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import rootSliceReducer from "./rootSlice"; // Import the 'reducer' property, not the entire module

const reducer = combineReducers({
  root: rootSliceReducer, // Use the imported 'reducer'
});

const store = configureStore({
  reducer,
});

export default store;
