import {combineReducers} from 'redux';
import {enthusiasm} from './demo';
import {handleListData} from './list';
import {handleUserProfile} from './userProfile';
const rootReducer = combineReducers({
    demo:enthusiasm,
    list:handleListData,
    userInfo:handleUserProfile
});
export default rootReducer;