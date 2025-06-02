import { ADD_TO_CART, REMOVE_FROM_CART } from "./constants";

const initState = [];
export const reducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                action.data
            ]
        case REMOVE_FROM_CART:
            return state.filter((item) => item.name != action.data.name)
        default:
            return state
    }
}