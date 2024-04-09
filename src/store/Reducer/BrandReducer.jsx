import { ADD_BRAND_RED, GET_BRAND_RED, DELETE_BRAND_RED, UPDATE_BRAND_RED } from "../COnstant";



export default function BrandReducer(state = [], action) {

    let newState, index;
    switch (action.type){
        case ADD_BRAND_RED:
            newState = [...state, action.payload];
            return newState;

        case GET_BRAND_RED:
            return action.payload.reverse();

            case UPDATE_BRAND_RED:
                index = state.findIndex(item => item.id === action.payload.id);
                newState = [...state];
                newState[index] = { ...newState[index], name: action.payload.name }; // Correctly update the name
                return newState;
            
        case DELETE_BRAND_RED:
            index = state.findIndex(item => item.id === action.payload.id);
            newState = [...state];
            newState.splice(index, 1);
            return newState;

        default:
            return state;
    }
}
