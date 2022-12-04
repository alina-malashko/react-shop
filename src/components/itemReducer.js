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
            newState.totalPrice += action.data.price;
            return newState;
        }
        case "DELETE_ITEM": {
            let newState = {...state};
            let newItems = newState.items.filter(item => item.id != action.data.id);
            newState.items = newItems;
            newState.totalPrice -= action.data.price * action.data.counter;
            return newState;
        }
        default: 
            return state;
    }
}

export default itemReducer;