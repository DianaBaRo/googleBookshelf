import React,  { Component } from 'react';

class SearchForm extends Component {

    state = {
        query: ''
    };

    handleChange = event => {
        event.persist();
        this.setState({
            query: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.fetchBooks(this.state.query);
        
    };

    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label><h1>Search for Book</h1></label>
                    <input type='text' onChange={this.handleChange} value={this.state.query}></input>
                    <input type='submit'></input>
                </form>
            </div>
        );
    };


};

export default SearchForm;