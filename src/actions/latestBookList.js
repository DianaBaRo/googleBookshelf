export function fetchLatestBookList () {
    return ( dispatch ) => {
        dispatch({ type: 'LOADING_LATEST_BOOK_LIST' });
        fetch('https://www.googleapis.com/books/v1/volumes?q=flowers&orderBy=newest')
        .then( response => response.json() )
        .then( books => dispatch({ type: 'ADD_LATEST_BOOK_LIST', books }) );
    };
};
