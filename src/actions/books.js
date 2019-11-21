import uuid from 'uuid';

export const addBook = book => {
    console.log("Inside the action");
    return {
        type: 'ADD_BOOK', 
        book: {
            id: uuid(),
            title: book.title,
            author: book.author,
            image: book.image,
            moreInfo: book.moreInfo
        }
    };
};
