import React from 'react';

const WishList = props => {
    return (
        <div>
            <span>
                <p>{props.book.title}</p>
                <p>{props.book.id}</p>
                <p>{props.book.author}</p>
                <p>{props.book.image}</p>
                <p>{props.book.moreInfo}</p>
            </span>
            <button onClick={ () => props.deleteBook(props.book.id)}>X</button>
        </div>
    );
};

export default WishList;