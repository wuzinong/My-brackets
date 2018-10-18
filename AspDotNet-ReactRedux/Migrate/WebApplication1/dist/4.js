(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./ClientApp/src/components/List/index.tsx":
/*!*************************************************!*\
  !*** ./ClientApp/src/components/List/index.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List(props) {
        return _super.call(this, props) || this;
    }
    List.prototype.render = function () {
        var listData = this.props.listData;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, listData.map(function (item, index) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", { key: index }, item);
        })));
    };
    return List;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component));
/* harmony default export */ __webpack_exports__["default"] = (List);


/***/ }),

/***/ "./ClientApp/src/views/List/index.tsx":
/*!********************************************!*\
  !*** ./ClientApp/src/views/List/index.tsx ***!
  \********************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, mergeProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeProps", function() { return mergeProps; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _listComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listComponent */ "./ClientApp/src/views/List/listComponent.tsx");
/* harmony import */ var _redux_reducers_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/reducers/list */ "./ClientApp/src/redux/reducers/list.tsx");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



function mapStateToProps(_a) {
    var _b = _a.list, listData = _b.listData, listComponent = _b.listComponent;
    return {
        listData: listData,
        listComponent: listComponent
    };
}
function mapDispatchToProps(dispatch, props) {
    var initList = function () {
        debugger;
        dispatch(Object(_redux_reducers_list__WEBPACK_IMPORTED_MODULE_2__["getData"])());
    };
    return {
        initList: initList
    };
}
function mergeProps(stateProps, dispatchProps, ownProps) {
    return __assign({}, ownProps, stateProps, dispatchProps);
}
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps, mergeProps)(_listComponent__WEBPACK_IMPORTED_MODULE_1__["default"]));


/***/ }),

/***/ "./ClientApp/src/views/List/list.scss":
/*!********************************************!*\
  !*** ./ClientApp/src/views/List/list.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"listContainer":"_3oR8YdbODSkDFjmaMafdI"};

/***/ }),

/***/ "./ClientApp/src/views/List/listComponent.tsx":
/*!****************************************************!*\
  !*** ./ClientApp/src/views/List/listComponent.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/List */ "./ClientApp/src/components/List/index.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var classNames = __webpack_require__(/*! ./list.scss */ "./ClientApp/src/views/List/list.scss");
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
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: classNames.listContainer + " mylist" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { to: "/" }, "back >"),
                "This is a test list ",
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { onClick: function () { _this.fetchData(); } }, "Get Data")),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_List__WEBPACK_IMPORTED_MODULE_1__["default"], { listData: listData })));
    };
    return ListComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component));
/* harmony default export */ __webpack_exports__["default"] = (ListComponent);


/***/ })

}]);
//# sourceMappingURL=4.js.map