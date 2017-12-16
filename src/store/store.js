import { createStore, applyMiddleware, combineReducers } from 'redux';
import { stockManipulator } from '../reducers/stockManipulator';
import { appState } from '../reducers/appState';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { socketMiddleware } from '../middlewares/socketMiddleware';
import io from 'socket.io-client';
import { wsAddStock, wsRemoveStock } from '../actions/actions';

const socket = io();
socket.on('new stock', stockObj => {
    store.dispatch(wsAddStock(stockObj))
});

socket.on('removed stock', symbol => {
    store.dispatch(wsRemoveStock(symbol));
})

let middlewares = applyMiddleware(logger, thunk, socketMiddleware(socket));
let reducers = combineReducers({
    'appState': appState,
    'chartData': stockManipulator
});

export let store = createStore(reducers, middlewares);