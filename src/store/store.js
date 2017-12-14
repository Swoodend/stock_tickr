import { createStore, applyMiddleware, combineReducers } from 'redux';
import { stockManipulator } from '../reducers/stockManipulator';
import { appState } from '../reducers/appState';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

let middlewares = applyMiddleware(logger, thunk);
let reducers = combineReducers({
    'appState': appState,
    'chartData': stockManipulator
});

export let store = createStore(reducers, middlewares);