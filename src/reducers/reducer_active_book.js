// state argument is not the application state but only the 
// state this reducer if responsible for

// must always return a non-undefined value
export default function (state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
        default:
            return state;
    }
}