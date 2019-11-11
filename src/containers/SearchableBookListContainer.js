import React, { PureComponent } from 'react';
import '../css/BookListContainer.css';
import BookList from '../components/BookList';
//import { fetchBooks } from '../actions/bookList';
//import  Button  from '../components/Button';

//import { connect } from 'react-redux';

class SearchableBookListContainer extends PureComponent {

    state = {
        query: '',
        books: []
    };

    handleChange = event =>
        this.setState({ query: event.target.value });

    handleSubmit = event => {  
        event.preventDefault();

        fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.query}`)
        .then(response => {
            if ( !response.ok && this.state.query <= 0 ) { throw response }
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
                <form className='searchForm' onSubmit={this.handleSubmit}>
                    <label htmlFor='query'><h1>Search for Book</h1></label>
                    <input 
                      id='query' 
                      type='text' 
                      aria-label='Search for Book' 
                      aria-required='true' 
                      name='query' 
                      onChange={this.handleChange} 
                      value={this.state.query}/>
                    <button type='submit'>Search</button>
                </form>

                {/* { Button(this.handleButton, "Search") } */}
                {typeof this.state.books === 'object' && this.state.books.length > 0 && <h2>Books By Search:</h2>}
                <BookList books={this.state.books} />
            </div>
        );
    };

};

export default SearchableBookListContainer;