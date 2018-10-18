import {combineReducers} from 'redux';
import {enthusiasm} from './demo';
import {handleListData} from './list';
const rootReducer = combineReducers({
    demo:enthusiasm,
    list:handleListData
});
export default rootReducer;