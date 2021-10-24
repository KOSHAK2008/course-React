import React, { useState } from 'react';
import { useContext } from 'react';
import CounterContext from '../CounterContext';
import * as ActionsCreators from '../../../../../redux/ActionsCreators'

const CounterButtons = () => {
    const counterContextState = useContext(CounterContext);
    const { age, counter, incrementAge, dispatch } = counterContextState;
    const [state, setState] = useState({});

    const onButtonClick = (count) => {
        ActionsCreators.incrementAsync(count)(dispatch);
    }
    const onAgeButtonClick = () => {
        incrementAge();
    }

    const onMultiplierChange = (evt) => {
        setState({ ...state, multiplier: evt.target.value });
    }

    const onSecondsChange = (evt) => {
        setState({ ...state, seconds: evt.target.value });
    }

    return <>
        {counter}{""}
        <button onClick={onButtonClick.bind(null, 1)}>Increment</button>
        <button onClick={() => { onButtonClick(2); }}>Increment + 2</button>
        <br />
        <br />
        <h3>Multiplier:</h3><input type="text" onChange={onMultiplierChange} value={state.multiplier || ""}></input>{' '}
        <br />
        <h3>Seconds:</h3><input type="text" onChange={onSecondsChange} value={state.seconds}></input>
        <br />
        <button onClick={() => {
            ActionsCreators.multiplyCurrentCounterAsync(
                { multiplier: state.multiplier, seconds: state.seconds }
            )(dispatch, () => (counterContextState));
        }}>Multiply</button>
        <br />
        {age}
        <button onClick={onAgeButtonClick}>Increment Age</button>
    </>
};

export default CounterButtons;