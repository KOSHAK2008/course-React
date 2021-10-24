import actionTypes from "../ActionTypes";

export default function todosReducer(state = [], action = '') {
    switch (action.type) {
        case actionTypes.todos.ADD:
            return [...state, action.playload];
        default:
            return state;
    }
}