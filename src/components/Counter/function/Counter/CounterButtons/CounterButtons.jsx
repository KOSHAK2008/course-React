import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as ActionsCreators from '../../../../../redux/ActionsCreators';

const CounterButtons = () => {
    const dispatch = useDispatch();
    const onButtonClick = (count) => {
        dispatch(ActionsCreators.incrementAsync(count));
    }
    const onAgeButtonClick = () => {
        dispatch(ActionsCreators.incrementAge());
    }

    const onSecondsChange = (evt) => {
        setState({ ...state, seconds: evt.target.value });
    }

    const counter = useSelector(state => state.counter);
    const age = useSelector(state => state.age);
    const [state, setState] = useState({});

    const onMultiplierChange = (evt) => {
        setState({ ...state, multiplier: evt.target.value });
    }

    return <>
        {counter}{""}
        <button onClick={onButtonClick.bind(null, 1)}>Increment</button>
        <button onClick={() => { onButtonClick(2); }}>Increment + 2</button>
        <br />
        <h3>Multiplier:</h3><input type="text" onChange={onMultiplierChange} value={state.multiplier || ""}></input>{' '}
        <br />
        <h3>Seconds:</h3><input type="text" onChange={onSecondsChange} value={state.seconds}></input>
        <br />
        <button onClick={() => {
            dispatch(ActionsCreators.multiplyCurrentCounterAsync(
                { multiplier: state.multiplier, seconds: state.seconds }
            ));
        }}>Multiply</button>
        <br />
        {age}
        <button onClick={onAgeButtonClick}>Increment Age</button>
    </>
};

export default CounterButtons;