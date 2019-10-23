import React from 'react';

const BookList = props => {
    return (
        <div>
            <ul>
                {props.books.map( book => <li>{book.selfLink}</li>)}
            </ul>
        </div>
        
    )
}

export default BookList;