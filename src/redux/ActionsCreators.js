import actionTypes from "./ActionTypes";
import { getFromJsonPlaceholder } from '../components/data/todos'

export const incrementAge = () => ({ type: actionTypes.age.INCREMENT });
export const setAge = (value) => ({ type: actionTypes.age.SET, payload: value });
export const decrement = () => ({ type: actionTypes.counter.DECREMENT });
export const decrement1 = () => ({ type: actionTypes.counter.DECREMENT1 });
export const increment = count => ({ type: actionTypes.counter.INCREMENT, payload: count });
export const multiply = value => ({ type: actionTypes.counter.MULTIPLY, payload: value });
export const addTodo = value => ({ type: actionTypes.todos.ADD, payload: value });
export const updateUser = value => ({ type: actionTypes.user.UPDATE, payload: value });
export const reset = () => ({ type: actionTypes.counter.RESET });

export function incrementAsync(count) {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(increment(count));
        }, 1000);
    };
}

export function multiplyCurrentCounterAsync({ multiplier, seconds }) {
    return async (dispatch, getState) => {
        // const { counter } = getState();
        // setTimeout(() => {
        //     dispatch(multiply(counter * multiplier));
        // }, seconds * 1000);
        const todo = await getFromJsonPlaceholder();
        const userId = todo.userId;
        dispatch(multiply(userId))

    };
}