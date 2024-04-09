import { ADD_PRODUCT_RED, GET_PRODUCT_RED, DELETE_PRODUCT_RED, UPDATE_PRODUCT_RED } from "../COnstant";



export default function ProductReducer(state = [], action) {

    let newState, index;
    switch (action.type){
        case ADD_PRODUCT_RED:
            newState = [...state, action.payload];
            return newState;

        case GET_PRODUCT_RED:
            return action.payload.reverse();

            case UPDATE_PRODUCT_RED:
                index = state.findIndex(item => item.id === action.payload.id);
                newState = [...state];
                newState[index] = { ...newState[index], name: action.payload.name }; // Correctly update the name
                return newState;
            
        case DELETE_PRODUCT_RED:
            index = state.findIndex(item => item.id === action.payload.id);
            newState = [...state];
            newState.splice(index, 1);
            return newState;

        default:
            return state;
    }
}
