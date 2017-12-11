import { createStore, applyMiddleware } from 'redux';
import { stockManipulator as reducer } from '../reducers/stockManipulator';
import logger from 'redux-logger';

let middlewares = applyMiddleware(logger);
export let store = createStore(reducer, middlewares);