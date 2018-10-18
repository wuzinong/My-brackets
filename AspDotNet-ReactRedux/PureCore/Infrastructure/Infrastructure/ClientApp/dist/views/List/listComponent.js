var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React from 'react';
import List from '../../components/List';
import { Link } from 'react-router-dom';
var classNames = require('./list.scss');
var ListComponent = /** @class */ (function (_super) {
    __extends(ListComponent, _super);
    function ListComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            listData: [],
            listComponent: null
        };
        return _this;
    }
    ListComponent.prototype.search = function () {
        // let value = this.searchInput.value;
        // const {filterList} = this.props;
        // filterList(value);
    };
    ListComponent.prototype.componentDidMount = function () {
    };
    ListComponent.prototype.fetchData = function () {
        var initList = this.props.initList;
        initList();
    };
    ListComponent.prototype.render = function () {
        var _this = this;
        var _a = this.props.listData, listData = _a === void 0 ? [] : _a;
        return (React.createElement("div", { className: classNames.listContainer + " mylist" },
            React.createElement("header", null,
                React.createElement(Link, { to: "/" }, "back >"),
                "This is a test list ",
                React.createElement("button", { onClick: function () { _this.fetchData(); } }, "Get Data")),
            React.createElement(List, { listData: listData })));
    };
    return ListComponent;
}(React.Component));
export default ListComponent;
//# sourceMappingURL=listComponent.js.map