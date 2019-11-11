import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import SearchableBookListContainer from './SearchableBookListContainer';
import LatestBookListContainer from './LatestBookListContainer';
import About from '../components/About'

const App = () => {
    return (
        <Router>
            <>
                <NavBar />
                <Route exact path='/' component={ LatestBookListContainer } />
                <Route exact path='/search' component={ SearchableBookListContainer } />
                <Route exact path='/about' component={ About } />
            </>
        </Router>
    );
};

export default App;