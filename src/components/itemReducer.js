const initState = {
    items: [],
    totalPrice: 0
};

function itemReducer (state = initState, action) {
    console.log(action);
    switch (action.type) {
        case "ADD_ITEM": {
            let newState = {...state};
            console.log(newState)
            newState.items.push(action.data);
            console.log(newState)
            return newState;
        }
        case "DELETE_ITEM": {
            let newState = {...state};

        }
        default: 
            return state;
    }
}

export default itemReducer;