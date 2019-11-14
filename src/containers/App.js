import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import SearchableBookListContainer from './SearchableBookListContainer';
import LatestBookListContainer from './LatestBookListContainer';
import Home from '../components/Home';
import NotFound from '../components/NotFound';
import Book from '../components/Book';

const App = () => {
    return (
        <Router>
            <>
                <NavBar />
                <Switch>
                    <Route exact path='/search/books/:id' component={ Book } />
                    <Route exact path='/search' component={ SearchableBookListContainer } />
                    <Route exact path='/new-releases/books/:id' component={ Book} />
                    <Route exact path='/new-releases' component={ LatestBookListContainer } />
                    <Route exact path='/' component={ Home } />
                    <Route component={ NotFound } />
                </Switch>
            </>
        </Router>
    );
};

export default App;