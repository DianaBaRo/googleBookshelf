import React, { PureComponent } from 'react';
import '../css/BookListContainer.css';
import Book from '../components/Book';
import { Route, Link } from 'react-router-dom';
//import { fetchBooks } from '../actions/bookList';

//import { connect } from 'react-redux';

class LatestBookListContainer extends PureComponent {

    state = {
        books: []
    };

    componentDidMount() {  
        fetch("https://www.googleapis.com/books/v1/volumes?q=flowers&orderBy=newest")
        .then(response => {
            if ( !response.ok ) { throw response }
            return response.json()  //we only get here if there is no error
        })
        .then(books => {
            console.log(books.items)
            if (books.error) {
                alert("There was an error")
            } else {
                this.setState({
                    books: books.items
                })
            }
        })
        .catch( err => {
            err.text().then(errorMessage => {
                alert(JSON.parse(errorMessage).error.message)
            })
        })
    
    };

    render () {

        const renderBooks = this.state.books.map(book => (
            <p>
                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                <Link to={{
                    pathname: `/new-releases/books/${book.volumeInfo.title}`,
                    state: book
                }} ><h3>{ book.volumeInfo.title }</h3></Link>
                
            </p> 
        ));

        return (
            <div className="BookListContainer">
                {renderBooks}
            </div>
        );
    };

};

export default LatestBookListContainer;