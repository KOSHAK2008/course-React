import CounterViaContextAndConnect from './CounterViaContextAndConnect';
import { Provider } from 'react-redux';
import store from '../../../../redux/Store';
import React from 'react';

export default class CounterViaContextAndClassesWithStore extends React.Component {
    render() {
        return <Provider store={store}>
            <CounterViaContextAndConnect />
        </Provider>;
    };
}