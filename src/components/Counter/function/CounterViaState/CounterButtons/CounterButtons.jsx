import React, { useState } from 'react';

const CounterButtons = ({ counter, age, incrementAsync, incrementAge, multiply }) => {

    const [state, setState] = useState({ multiplier: "" })

    const onButtonClick = (count) => {
        incrementAsync(count);
    }
    const onAgeButtonClick = () => {
        incrementAge();
    }

    const onMultiplyBatton = () => {
        multiply({ multiplier: state.multiplier, seconds: state.seconds });
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
        <h3>Multiplier:</h3><input type="text" onChange={onMultiplierChange} value={state.multiplier}></input>{' '}
        <br />
        <h3>Seconds:</h3><input type="text" onChange={onSecondsChange} value={state.seconds || ""}></input>
        <br />
        <button onClick={onMultiplyBatton}>Multiply</button>
        {age}
        <button onClick={onAgeButtonClick}>Increment Age</button>
    </>
};

export default CounterButtons;