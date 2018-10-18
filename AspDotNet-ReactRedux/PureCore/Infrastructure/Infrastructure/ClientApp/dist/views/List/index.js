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
import ListComponent from './listComponent';
import { getData } from '../../redux/reducers/list';
export function mapStateToProps(_a) {
    var _b = _a.list, listData = _b.listData, listComponent = _b.listComponent;
    return {
        listData: listData,
        listComponent: listComponent
    };
}
export function mapDispatchToProps(dispatch, props) {
    var initList = function () {
        dispatch(getData());
    };
    return {
        initList: initList
    };
}
export function mergeProps(stateProps, dispatchProps, ownProps) {
    return __assign({}, ownProps, stateProps, dispatchProps);
}
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ListComponent);
//# sourceMappingURL=index.js.map