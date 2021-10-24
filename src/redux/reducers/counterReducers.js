import actionTypes from "../ActionTypes";

const initialState = '0';

export default function counterReducer(state = initialState, action = '') {
    switch (action.type) {
        case actionTypes.counter.INCREMENT:
            return (+state + (action.payload || 1)).toString();
        case actionTypes.counter.DECREMENT:
            return (+state - 1).toString();
        case actionTypes.counter.MULTIPLY:
            return action.payload;
        case actionTypes.counter.RESET:
            return initialState;
        default:
            return state;
    }
}