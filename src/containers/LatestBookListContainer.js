import React, { PureComponent } from 'react';
import '../css/BookListContainer.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchLatestBookList } from '../actions/latestBookList';

class LatestBookListContainer extends PureComponent {

    componentDidMount() {
        console.log(this.props);
        this.props.fetchLatestBookList();
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
                        pathname: `/new-releases/books/${book.volumeInfo.title}`,
                        state: book
                    }} ><h3>{ book.volumeInfo.title }</h3></Link>
                    
                </p> 
            ));
            return renderBooks
        };
    };

    render () {
        return (
            <div className="BookListContainer">
                {this.handleLoading()}
            </div>
        );
    };
};

function mapDispatchToProps(dispatch) {
    return { fetchLatestBookList: () => dispatch(fetchLatestBookList()) }
};

function mapStateToProps(state) {
    return{ books: state.latestBookList }
};

export default connect(mapStateToProps, mapDispatchToProps) (LatestBookListContainer);