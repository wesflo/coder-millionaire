import thunk from 'redux-thunk';
import {combineReducers, compose, createStore, applyMiddleware} from 'redux';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    combineReducers({
        reducer
    }),
    {},
    composeEnhancers(applyMiddleware(thunk))
);
