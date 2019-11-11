import React from 'react';
import Book from './Book';

const BookList = ({ books }) => (
    <>
        { books.map(book => <Book title={book.volumeInfo.title} img_url={book.volumeInfo.imageLinks.thumbnail} />) }
    </>
)

export default BookList;