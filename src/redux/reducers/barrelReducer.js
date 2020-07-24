const newBarrelReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_TO_LIST':
            return [...state, action.payload]
        default:
            return state;
    }
};

export default newBarrelReducer;