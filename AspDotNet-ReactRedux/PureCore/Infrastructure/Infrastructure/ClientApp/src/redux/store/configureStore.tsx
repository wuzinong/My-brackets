import {compose, createStore,applyMiddleware} from 'redux';
import reducers from '../reducers/index';
// import {StoreState} from '../../types';
import thunk from 'redux-thunk';
import initState from './initState';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function(){
    const store = createStore(
        reducers,
        initState,
        composeEnhancers(
            applyMiddleware(thunk)
        )
    );
    return store;
}