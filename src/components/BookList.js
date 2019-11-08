import React from 'react';
import Book from './Book';

const BookList = ({ books }) => (
    <div className="book-list">
    { books.map(book => <Book title={book.volumeInfo.title} img_url={book.volumeInfo.imageLinks.thumbnail} />) }
  </div>

)


export default BookList;