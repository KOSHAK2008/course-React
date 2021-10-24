import React from 'react';
import { increment, addTodo, updateUser, reset } from '../../../../redux/ActionsCreators';
import store from "../../../../redux/Store";
import { Provider } from 'react-redux'
import CounterButtons from './CounterButtons/CounterButtons';


class CounterViaClass extends React.Component {

    componentDidMount(args) {
        const setLocalState = () => {
            const reduxState = store.getState();
            this.setState({ ...this.state, counter: reduxState.counter });
        }

        setLocalState();
        store.subscribe(() => {
            setLocalState();
        });
    }

    componentWillUnmount() {
        store.dispatch(reset());
    }

    render() {
        const { counter } = this.state || {};

        const onButtonClick = () => {
            store.dispatch(increment());
        }

        return <>
            Counter {counter || ''}
            <button onClick={onButtonClick}>Increment</button>
            <button onClick={() => {
                store.dispatch(addTodo({ id: counter }));
            }}>ADD TODO</button>
            <button onClick={() => {
                store.dispatch(updateUser({ country: 'BELARUS' }));
            }}>Update User</button>
            <br />
            <Provider store={store}>
                <CounterButtons />
            </Provider>
        </>
    }
}

export default CounterViaClass