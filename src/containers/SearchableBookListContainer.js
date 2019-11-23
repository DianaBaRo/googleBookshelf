import React, { PureComponent } from 'react';
import '../css/BookListContainer.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSearchBookList } from '../actions/searchBookList';

class SearchableBookListContainer extends PureComponent {

    state = {
        query: ''
    };

    handleChange = event =>
        this.setState({ query: event.target.value });

    handleSubmit = event => {  
        event.preventDefault();
        this.props.fetchSearchBookList(this.state.query);
    };

    handleLoading = () => {
        console.log(this.props.books);
        if (this.props.loading) {
            return <div>Loading...</div>
        } else {
            const renderBooks = this.props.books.map(book => (
                <p>
                    <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                    <Link to={{
                        pathname: `/search/books/${book.volumeInfo.title}`,
                        state: book
                    }} ><h3>{ book.volumeInfo.title }</h3></Link>
                    
                </p> 
            ));
            return renderBooks
        };
    };
    
    render () {
        console.log(this.props)
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
                {typeof this.props.books === 'object' && this.props.books.length > 0 && <h2>Books By Search:</h2>}
                
                {this.handleLoading()}
            </div>
        );
    };

};

function mapDispatchToProps(dispatch) {
    return { fetchSearchBookList: (query) => dispatch(fetchSearchBookList(query)) }
};

function mapStateToProps(state) {
    return{ books: state.searchBookList }
};

export default connect(mapStateToProps, mapDispatchToProps) (SearchableBookListContainer);