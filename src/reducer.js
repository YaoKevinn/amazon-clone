export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);

export const initialState = {
    basket:[],
    user: null,
};

function reducer(state, action){
    console.log(action)
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
            break;
        case 'ADD_TO_BASKET':
            //Logic for adding item to basket
            return { 
                ...state,
                basket: [...state.basket, action.item]
            };
            break;
        case 'REMOVE_FROM_BASKET':
            //Logic for removing item from basket

            //Clone the basket
            let newBasket = [...state.basket];

            //Check to se if product exists
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            //if item exists
            if (index >= 0) {
                //remove item from basket
                newBasket.splice(index, 1);
            }else{
                console.warn(`Cant remove product (id: ${action.id})`)
            };

            return { 
                ...state, 
                basket: newBasket 
            };
            break;
        default:
            return state;
    }
}

export default reducer;