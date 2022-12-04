const initState = {
    items: [],
    totalPrice: 0
};

function itemReducer (state = initState, action) {
    switch (action.type) {
        case "ADD_ITEM": {
            let newState = {...state};
            let index = newState.items.findIndex(item => item.id === action.data.id);
            if (index >= 0) {
                newState.items[index].counter = action.data.counter;
                newState.items[index].price += action.data.price;
            } else {
                let newItem = {...action.data};
                newItem.singleItemPrice = action.data.price;
                newState.items.push(newItem);
            }
            newState.totalPrice += action.data.price;
            return newState;
        }
        case "DELETE_ITEM": {
            let newState = {...state};
            let newItems = newState.items.filter(item => item.id != action.data.id);
            newState.items = newItems;
            newState.totalPrice -= action.data.price;
            return newState;
        }
        case "CHANGE_QTY": {
            let newState = {...state};
            let index = newState.items.findIndex(item => item.id === action.data.id);
            newState.totalPrice -= newState.items[index].price;
            newState.totalPrice += action.data.price;
            newState.items[index].counter = action.data.counter;
            newState.items[index].price = action.data.price;
            return newState;
        }
        default: 
            return state;
    }
}

export default itemReducer;