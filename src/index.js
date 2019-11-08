import React from 'react';
import ReactDOM from 'react-dom';
import SearchableBookListContainer from './containers/SearchableBookListContainer';
import LatestBookListContainer from './containers/LatestBookListContainer';

import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'; 
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import booksReducer from './reducers/booksReducer';

const store = createStore(booksReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store} >
        <SearchableBookListContainer />
        <LatestBookListContainer />
    </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
