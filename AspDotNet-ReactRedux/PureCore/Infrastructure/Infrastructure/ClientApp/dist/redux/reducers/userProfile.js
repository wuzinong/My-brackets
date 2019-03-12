var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import initState from '../store/initState';
import { INIT_USERPROFILE } from '../constants';
import { initUserProfile } from '../actions/index';
import axios from 'axios';
import { API_MY_PROFILE_MOCK } from '../../consts';
export function handleUserProfile(state, action) {
    if (state === void 0) { state = initState.userInfo; }
    switch (action.type) {
        case INIT_USERPROFILE:
            {
                return __assign({}, state, action.userInfo);
            }
            break;
        default:
            return state;
    }
}
var getUserProfile = function () { return function (dispatch) {
    axios.get(API_MY_PROFILE_MOCK).then(function (response) {
        dispatch(initUserProfile(response.data));
    }).catch(function (error) {
        console.log("Get an error");
        console.log(error);
    });
}; };
export { getUserProfile };
//# sourceMappingURL=userProfile.js.map