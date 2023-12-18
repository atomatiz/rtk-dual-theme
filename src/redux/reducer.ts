import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import themeReducer from './reducers/themeSlice';

const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer,
});

export default rootReducer;
