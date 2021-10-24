import actionTypes from "../ActionTypes";

export default function ageReducer(state = 0, action = '') {
    switch (action.type) {
        case actionTypes.age.INCREMENT:
            return state + 1;
        case actionTypes.age.SET:
            return action.payload;
        default:
            return state;
    }
}
