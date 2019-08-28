import {compose, createStore,applyMiddleware} from 'redux';
import reducers from '../reducers/index';
import initState from './initState';
import createHistory from 'history/createBrowserHistory';
import { connectRouter,routerMiddleware} from 'connected-react-router';
import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga';

export const history = createHistory();
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const middlewares = [routerMiddleware(history), sagaMiddleware];

const myReducer = (history) => combineReducers({
    ...reducers,
    router: connectRouter(history)
});

const store = createStore(
    myReducer(history),
    initState,
    composeEnhancers(
        applyMiddleware(...middlewares)
    )
);

sagaMiddleware.run(rootSaga);

export const myStore = store;
export const myHis = history;