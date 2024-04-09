import { ADD_SUBCATEOGARY_RED, GET_SUBCATEOGARY_RED, DELETE_SUBCATEOGARY_RED, UPDATE_SUBCATEOGARY_RED } from "../COnstant";



export default function SubCateogaryReducer(state = [], action) {

    let newState, index;
    switch (action.type){
        case ADD_SUBCATEOGARY_RED:
            newState = [...state, action.payload];
            return newState;

        case GET_SUBCATEOGARY_RED:
            return action.payload.reverse();

            case UPDATE_SUBCATEOGARY_RED:
                index = state.findIndex(item => item.id === action.payload.id);
                newState = [...state];
                newState[index] = { ...newState[index], name: action.payload.name }; // Correctly update the name
                return newState;
            
        case DELETE_SUBCATEOGARY_RED:
            index = state.findIndex(item => item.id === action.payload.id);
            newState = [...state];
            newState.splice(index, 1);
            return newState;

        default:
            return state;
    }
}
