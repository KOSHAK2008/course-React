import React from 'react';
// import { incrementAge } from '../../../redux/ActionsCreators';

class CounterButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            multiply: 0,
            seconds: 0,
        };

        this.onAgeButtonClick = this.onAgeButtonClick.bind(this);
        this.onMultiplyButton = this.onMultiplyButton.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
        this.onSecondsChange = this.onSecondsChange.bind(this);
        this.onMultiplierChange = this.onMultiplierChange.bind(this);
    }

    onButtonClick = (count) => {
        this.props.incrementAsync(count);
    }
    onAgeButtonClick = () => {
        this.props.incrementAge();
    }

    onMultiplyButton = () => {
        this.props.multiply({ multiplier: this.state.multiplier, seconds: this.state.seconds });
    }

    onMultiplierChange = (evt) => {
        this.setState({ ...this.state, multiplier: evt.target.value });
    }

    onSecondsChange = (evt) => {
        this.setState({ ...this.state, seconds: evt.target.value });
    }

    render() {
        return <>
            {this.props.counter}{""}
            <button onClick={this.onButtonClick.bind(null, 1)}>Increment</button>
            <button onClick={() => { this.onButtonClick(2); }}>Increment + 2</button>
            <br />
            <br />
            <h3>Multiplier:</h3><input type="text" onChange={this.onMultiplierChange} value={this.state.multiplier}></input>{' '}
            <br />
            <h3>Seconds:</h3><input type="text" onChange={this.onSecondsChange} value={this.state.seconds || ""}></input>
            <br />
            <button onClick={this.onMultiplyButton}>Multiply</button>
            {this.props.age}
            <button onClick={this.onAgeButtonClick}>Increment Age</button>
        </>
    }
};

export default CounterButtons;