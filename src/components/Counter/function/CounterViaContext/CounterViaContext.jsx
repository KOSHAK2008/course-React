import React, { useEffect, useCallback, useReducer } from 'react';
import CounterContext from './CounterContext';
import CounterButtons from './CounterButtons/CounterButtons';
import rootReducder from '../../../../redux/reducers/rootReducer';
import * as ActionsCreators from '../../../../redux/ActionsCreators'

const initialState = {
    counter: 0,
    age: 25,
};

export default function CounterViaContext() {

    const [state, dispatch] = useReducer(rootReducder, initialState);
    const { counter } = state;


    const increment = useCallback((count) => {
        dispatch(ActionsCreators.increment(count));
    }, []);

    const incrementAge = () => {
        dispatch(ActionsCreators.incrementAge());
    }

    const onButtonClick = () => {
        increment();
    }

    useEffect(() => {
        increment(7);
        increment(7);
        increment(7);
    }, [increment]);

    return <>
        Counter {counter}
        <button onClick={onButtonClick}>Increment Counter</button>
        <br />
        <CounterContext.Provider value={{ ...state, incrementAge, dispatch }}>
            <CounterButtons />
        </CounterContext.Provider>
    </>
}
