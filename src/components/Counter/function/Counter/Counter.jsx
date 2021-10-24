import React, { useEffect, useRef, useState } from 'react';
import { increment, addTodo, updateUser } from '../../../../redux/ActionsCreators';
import store from "../../../../redux/Store";
import { Provider } from 'react-redux'
import CounterButtons from './CounterButtons/CounterButtons';
import { useUnmount } from '../../../hooks/useUnmount'


export default function Counter() {

    const [isStoreSubscribed, setStoreSubscribed] = useState(false);
    const [counter, setCounter] = useState();


    const refToUnsubscribe = useRef(null);

    useEffect(() => {

        if (!isStoreSubscribed) {
            refToUnsubscribe.current = store.subscribe(() => {
                const state = store.getState();
                console.log(state);
                setCounter(state.counter);
            });

            setStoreSubscribed(true);
        };
    }, [isStoreSubscribed]);

    const onButtonClick = () => {
        store.dispatch(increment());
    }

    const onComponentUnmount = () => {
        if (refToUnsubscribe.current) {
            refToUnsubscribe.current();
        }
    }

    useUnmount(onComponentUnmount);

    return <>
        <div>Counter <div style={{ fontSize: '320px', color: 'red' }}> {counter || ''}</div></div>
        <div>
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
            </Provider></div>
    </>
}
