import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers/index';
// import {StoreState} from '../../types';
import thunk from 'redux-thunk';
import initState from './initState';
export default function () {
    var store = createStore(reducers, initState, applyMiddleware(thunk));
    return store;
}
//# sourceMappingURL=configureStore.js.map