import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import SearchableBookListContainer from '../containers/SearchableBookListContainer';
import LatestBookListContainer from '../containers/LatestBookListContainer';
import Home from './Home';
import NotFound from './NotFound';
import Book from './Book';
import WishListContainer from '../containers/WishListContainer';
import AlreadyReadContainer from '../containers/AlreadyReadContainer';
import CreateBook from '../containers/CreateBook';

const Routes = () => {
    return (
        <Router>
            <>
                <NavBar />
                <Switch>
                    <Route exact path='/search/books/:id' component={ Book } />
                    <Route exact path='/search' component={ SearchableBookListContainer } />
                    <Route exact path='/new-releases/books/:id' component={ Book} />
                    <Route exact path='/new-releases' component={ LatestBookListContainer } />
                    <Route exact path='/create-book' component={ CreateBook } />
                    <Route exact path='/wishlist' component={ WishListContainer } />
                    <Route exact path='/already-read' component={ AlreadyReadContainer } />
                    <Route exact path='/' component={ Home } />
                    <Route component={ NotFound } />
                </Switch>
            </>
        </Router>
    );
};

export default Routes;