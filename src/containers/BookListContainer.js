import React from 'react';
import SearchForm from '../components/SearchForm';
import BookList from '../components/BookList';

class BookListContainer extends React.Component {
    state = {
        books: []
    }

    fetchBooks = (query) => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                books: data.items
            })
        })
    };

    render () {
        return(
            <div>
                <SearchForm fetchBooks={this.fetchBooks} />
                <BookList books={this.state.books} />
            </div>
        )
    }

};

export default BookListContainer;