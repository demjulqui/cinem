import axios from "axios"
import Types


export const shopinginiziale = {
    shop: [],
    cart : [],


}

export function shoppingReducer(state = shopinginiziale, action) {
    switch (action.type) {
        case "SHOP_FETCH_DATA_SUCCESS":
            return {
                ...state,
                shop: action.payload
            }
        case "SHOP_ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case "SHOP_REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        default:
            return state
    }
}


