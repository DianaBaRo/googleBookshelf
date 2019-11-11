import React from 'react';

const Book = ({ title, img_url }) => (
    <>
        <img src={ img_url } alt={ title } />
        <h3>{ title }</h3>
    </>
)

export default Book;