const newItemReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_TO_LIST':
            // return action.payload
            return [...state, action.payload]
        default:
            return state;
    }
};

export default newItemReducer;