import { compose, createStore, applyMiddleware } from 'redux';
import reducers from '../reducers/index';
// import {StoreState} from '../../types';
import thunk from 'redux-thunk';
import initState from './initState';
var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default function () {
    var store = createStore(reducers, initState, composeEnhancers(applyMiddleware(thunk)));
    return store;
}
//# sourceMappingURL=configureStore.js.map