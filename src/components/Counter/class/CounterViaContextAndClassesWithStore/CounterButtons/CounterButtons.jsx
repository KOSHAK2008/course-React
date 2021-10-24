import React from 'react';
import CounterContext from '../CounterContext';

class CounterButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = { multiplier: '' };
    }

    render() {
        const { age, counter, onButtonClick, onAgeButtonClick, multiplyAge } = this.context;

        const onMultiplierChange = (evt) => {
            this.setState({ ...this.state, multiplier: evt.target.value });
        }

        const onSecondsChange = (evt) => {
            this.setState({ ...this.state, seconds: evt.target.value });
        }

        const onAgeMultiplyButtonClick = () => {
            multiplyAge();
        }

        return <>
            {counter}{""}
            <button onClick={() => onButtonClick(1)}>Increment</button>
            <button onClick={() => onButtonClick(2)}>Increment + 2</button>
            <br />
            <br />
            <h3>Multiplier:</h3><input type="text" onChange={onMultiplierChange} value={this.state.multiplier || ""}></input>{' '}
            <br />
            <h3>Seconds:</h3><input type="text" onChange={onSecondsChange} value={this.state.seconds}></input>
            <br />
            <button onClick={() => { }}>Multiply</button>
            <br />
            {age}
            <button onClick={onAgeButtonClick}>Increment Age</button>
            <button onClick={onAgeMultiplyButtonClick}>Age * 2</button>
        </>
    };
}

CounterButtons.contextType = CounterContext;
export default CounterButtons;