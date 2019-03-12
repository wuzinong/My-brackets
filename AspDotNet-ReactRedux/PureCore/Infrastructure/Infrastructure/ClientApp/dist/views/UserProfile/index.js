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
import { connect } from 'react-redux';
import UserProfileComponent from './userProfileComponent';
export function mapStateToProps() {
    return {};
}
export function mapDispatchToProps() {
    return {};
}
export function mergeProps(stateProps, dispatchProps, ownProps) {
    return __assign({}, ownProps, stateProps, dispatchProps);
}
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(UserProfileComponent);
//# sourceMappingURL=index.js.map