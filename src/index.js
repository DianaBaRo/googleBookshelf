import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/Routes';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    //We pass our store as a prop to Provider and wrap our App component so all our components will have access to our Redux store and/or dispatch actions via the connect function.
    //Provider tells to our Redux app when there has been a change in state and has to re renders via the connect function. We have to specify which changes to the store's state should prompt a re-render of the application.
    <Provider store={store}>
        <Routes />
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
