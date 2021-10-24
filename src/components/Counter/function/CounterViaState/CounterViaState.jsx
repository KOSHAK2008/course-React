import React, { useState, useCallback } from 'react';
import CounterButtons from './CounterButtons/CounterButtons';

const initialState = {
    counter: 0,
    age: 25,
};

export default function CounterViaState() {

    const [state, setState] = useState(initialState);
    const { counter } = state;

    const increment = useCallback((count) => {
        setState({ ...state, counter: state.counter + (count || 1) });
    }, [state]);

    const incrementAge = () => {
        setState({ ...state, age: state.age + 1 });
    }

    const onButtonClick = () => {
        increment();
    }

    const incrementAsync = (count) => {
        setTimeout(() => {
            increment(count);
        }, 1000);
    };

    const multiply = ({ multiplier, seconds }) => {
        setTimeout(() => {
            setState({ ...state, counter: state.counter * multiplier });
        }, seconds * 1000);
    };

    return <>
        Counter {counter}
        <button onClick={onButtonClick}>Increment Counter</button>
        <br />
        <CounterButtons {...state} incrementAsync={incrementAsync} incrementAge={incrementAge} multiply={multiply} />
    </>
}
