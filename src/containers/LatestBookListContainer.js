import React, { PureComponent } from 'react';
import '../css/BookListContainer.css';
import BookList from '../components/BookList';
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
        return (
            <div className="BookListContainer">
                <BookList books={this.state.books} />
            </div>
        );
    };

};

export default LatestBookListContainer;