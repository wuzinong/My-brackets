import {createStore,applyMiddleware} from 'redux';
import reducers from '../reducers/index';
// import {StoreState} from '../../types';
import thunk from 'redux-thunk';
import initState from './initState';
export default function(){
    const store = createStore(
        reducers,
        initState,
        applyMiddleware(thunk)
    );
    return store;
}