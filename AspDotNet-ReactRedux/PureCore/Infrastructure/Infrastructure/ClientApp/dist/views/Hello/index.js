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
import Hello from '../../components/Hello';
import * as actions from '../../redux/actions/index';
import { connect } from 'react-redux';
export function mapStateToProps(_a) {
    var _b = _a.demo, enthusiasmLevel = _b.enthusiasmLevel, languageName = _b.languageName;
    return {
        enthusiasmLevel: enthusiasmLevel,
        name: languageName
    };
}
export function mapDispatchToProps(dispatch) {
    return {
        onIncrement: function () { return dispatch(actions.incrementEnthusiasm()); },
        onDecrement: function () { return dispatch(actions.decrementEnthusiasm()); }
    };
}
export function mergeProps(stateProps, dispatchProps, ownProps) {
    // return Object.assign({},ownProps,stateProps,dispatchProps);
    return __assign({}, ownProps, stateProps, dispatchProps);
}
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Hello);
//# sourceMappingURL=index.js.map