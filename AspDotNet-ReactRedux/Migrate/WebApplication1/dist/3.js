(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./ClientApp/src/views/About/about.scss":
/*!**********************************************!*\
  !*** ./ClientApp/src/views/About/about.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"des":"_3_9K_RDusuNyj5OyYAe94L"};

/***/ }),

/***/ "./ClientApp/src/views/About/aboutComponent.tsx":
/*!******************************************************!*\
  !*** ./ClientApp/src/views/About/aboutComponent.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
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


var classNames = __webpack_require__(/*! ./about.scss */ "./ClientApp/src/views/About/about.scss");
var AboutComponent = /** @class */ (function (_super) {
    __extends(AboutComponent, _super);
    function AboutComponent(props) {
        return _super.call(this, props) || this;
    }
    AboutComponent.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: classNames.des },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "About Me"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "This is Bran, and I'm a front end developer."),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: "/" }, "return to home")));
    };
    return AboutComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component));
/* harmony default export */ __webpack_exports__["default"] = (AboutComponent);


/***/ }),

/***/ "./ClientApp/src/views/About/index.tsx":
/*!*********************************************!*\
  !*** ./ClientApp/src/views/About/index.tsx ***!
  \*********************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, mergeProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeProps", function() { return mergeProps; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _aboutComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aboutComponent */ "./ClientApp/src/views/About/aboutComponent.tsx");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


function mapStateToProps() {
    return {};
}
function mapDispatchToProps(dispatch, props) {
    return {};
}
function mergeProps(stateProps, dispatchProps, ownProps) {
    return __assign({}, ownProps, stateProps, dispatchProps);
}
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps, mergeProps)(_aboutComponent__WEBPACK_IMPORTED_MODULE_1__["default"]));


/***/ })

}]);
//# sourceMappingURL=3.js.map