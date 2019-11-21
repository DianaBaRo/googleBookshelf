import booksReducer from './booksReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    books: booksReducer
});

export default rootReducer;