import actionTypes from "../ActionTypes";

export default function userReducer(state = {}, action = '') {
    switch (action.type) {
        case actionTypes.user.UPDATE:
            return { ...state, ...action.playload };
        default:
            return state;
    }
}