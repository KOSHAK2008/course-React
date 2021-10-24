import { applyMiddleware, createStore, compose } from 'redux';
import rootReducder from './reducers/rootReducer';
import thunk from 'redux-thunk';

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : a => a;

const store = createStore(
    rootReducder,
    compose(
        applyMiddleware(thunk),
        devtools
    )
);

export default store;