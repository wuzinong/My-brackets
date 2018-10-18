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
import { GET_LIST, INIT_LIST } from '../constants';
import { initList } from '../actions/index';
import axios from 'axios';
export function handleListData(state, action) {
    if (state === void 0) { state = initState.list; }
    switch (action.type) {
        case INIT_LIST: {
            var listData = action.listData;
            return __assign({}, state, { listData: listData });
            // let mylist =  [
            //     "test1",
            //     "test2"
            // ];
            // return {...state,...{listData:mylist}};
        }
        case GET_LIST: {
            var url = "http://127.0.0.1:10010/api/data";
            axios.get(url).then(function (response) {
                var mylist = response.data;
                debugger;
                return __assign({}, state, { listData: mylist });
            });
            // let mylist =  [
            //     "test1",
            //     "test2"
            // ];
            // return {...state,...{listData:mylist}};
        }
        // case Filter_LIST:{
        //     const {name} = action; 
        //     return {...state,enthusiasmLevel:Math.max(1,state.enthusiasmLevel-1)};
        // }
        default:
            return state;
    }
}
var getData = function () { return function (dispatch) {
    var url = "/api/GetList";
    debugger;
    axios.get(url).then(function (response) {
        dispatch(initList(response.data));
    });
}; };
export { getData };
//# sourceMappingURL=list.js.map