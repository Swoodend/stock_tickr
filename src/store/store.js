import { createStore, applyMiddleware } from 'redux';
import { stockManipulator as reducer } from '../reducers/stockManipulator';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

let middlewares = applyMiddleware(logger, thunk);
export let store = createStore(reducer, middlewares);