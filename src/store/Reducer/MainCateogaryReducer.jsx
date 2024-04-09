import { ADD_MAINCATEOGARY_RED, GET_MAINCATEOGARY_RED, DELETE_MAINCATEOGARY_RED, UPDATE_MAINCATEOGARY_RED } from "../COnstant";



export default function MainCateogaryReducer(state = [], action) {

    let newState, index;
    switch (action.type){
        case ADD_MAINCATEOGARY_RED:
            newState = [...state, action.payload];
            return newState;

        case GET_MAINCATEOGARY_RED:
            return action.payload.reverse();

            case UPDATE_MAINCATEOGARY_RED:
                index = state.findIndex(item => item.id === action.payload.id);
                newState = [...state];
                newState[index] = { ...newState[index], name: action.payload.name }; // Correctly update the name
                return newState;
            
        case DELETE_MAINCATEOGARY_RED:
            index = state.findIndex(item => item.id === action.payload.id);
            newState = [...state];
            newState.splice(index, 1);
            return newState;

        default:
            return state;
    }
}
