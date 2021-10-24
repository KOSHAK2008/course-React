import React from 'react';
import CounterButtons from './CounterButtons/CounterButtons';
import CounterContext from './CounterContext';
import * as ActionsCreators from '../../../../redux/ActionsCreators';
import { connect } from 'react-redux';

class CounterViaContext extends React.Component {
    render() {
        const onButtonClick = () => {
            this.props.increment();
            // this.props.callIncrement()
        }

        return <>
            Counter: {this.props.counter}
            <button onClick={onButtonClick}>Increment</button>
            <br />
            <CounterContext.Provider value={{ ...this.props }}>
                <CounterButtons />
            </CounterContext.Provider>
        </>
    }
};

function mapStateToProps(state) {
    return {
        counter: state.counter,
        age: state.age,
    }
};

function mapDispatchToProps(dispatch) {
    return {
        increment: (count) => {
            dispatch(ActionsCreators.increment(count));
        },
        onButtonClick: (count) => {
            ActionsCreators.incrementAsync(count)(dispatch);
        },
        setAge: (value) => dispatch(ActionsCreators.setAge(value)),
        onAgeButtonClick: () => {
            dispatch(ActionsCreators.incrementAge());
        },
    }
}

const mergeProps = (stateProps, dispatchProps) => {
    return {
        ...stateProps,
        ...dispatchProps,
        multiplyAge: () => {
            dispatchProps.setAge(stateProps.age * 2);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(CounterViaContext);