import { combineReducers } from 'redux';
import { enthusiasm } from './demo';
import { handleListData } from './list';
var rootReducer = combineReducers({
    demo: enthusiasm,
    list: handleListData
});
export default rootReducer;
//# sourceMappingURL=index.js.map