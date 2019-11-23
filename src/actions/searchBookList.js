export function fetchSearchBookList (query) {
    return ( dispatch ) => {
        dispatch({ type: 'LOADING_SEARCH_BOOK_LIST' });
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
        .then( response => response.json() )
        .then( books => dispatch({ type: 'ADD_SEARCH_BOOK_LIST', books }) );
    };
};