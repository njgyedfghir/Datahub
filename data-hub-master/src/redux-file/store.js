// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
  // Add middleware, devTools, etc. as needed
});

export default store;
