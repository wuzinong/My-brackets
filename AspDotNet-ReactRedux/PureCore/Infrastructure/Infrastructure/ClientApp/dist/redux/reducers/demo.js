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
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants';
import initState from '../store/initState';
export function enthusiasm(state, action) {
    if (state === void 0) { state = initState.demo; }
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            return __assign({}, state, { enthusiasmLevel: state.enthusiasmLevel + 1 });
        case DECREMENT_ENTHUSIASM:
            return __assign({}, state, { enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) });
    }
    return state;
}
//# sourceMappingURL=demo.js.map