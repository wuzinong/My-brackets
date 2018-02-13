import {combineReducers} from 'redux';
import {HomeReducer} from './home-reducer.js';
import {AboutReducer} from './about-reducer';
export default combineReducers({
    HomeReducer,
    AboutReducer
})