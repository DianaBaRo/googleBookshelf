import React from 'react';
import '../css/Book.css';

const Book = (props) => {
    console.log(props.location.state)
    if (props.location.state) {
        let bookTitle = props.location.state.volumeInfo.title;
        let bookImage = props.location.state.volumeInfo.imageLinks.thumbnail;
        let bookAuthor = props.location.state.volumeInfo.authors.join('');
        let bookInfo = props.location.state.volumeInfo.infoLink;
        let bookDescription = props.location.state.volumeInfo.description;

        return(
            <div className="BookListContainer">
                <h1>Book info</h1>
                <h1>{ bookTitle }</h1>
                <img src={bookImage} alt={bookTitle} />
                <p>by { bookAuthor }</p>
                <p><a href={ bookInfo }>More Info</a></p>
                <p>{ bookDescription }</p>
            </div>
        )
    } else {
        return <h1>URL not valid</h1>

    }
};

export default Book;