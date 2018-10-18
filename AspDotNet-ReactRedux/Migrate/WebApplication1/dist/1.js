(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./ClientApp/src/components/Dialogue/dialogue.scss":
/*!*********************************************************!*\
  !*** ./ClientApp/src/components/Dialogue/dialogue.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"bak":"LoI9dw6pyDjxq_LbLWh7S","content":"_38dq8xBYkwnMrKT6VnPFaG"};

/***/ }),

/***/ "./ClientApp/src/components/Dialogue/index.tsx":
/*!*****************************************************!*\
  !*** ./ClientApp/src/components/Dialogue/index.tsx ***!
  \*****************************************************/
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

var className = __webpack_require__(/*! ./dialogue.scss */ "./ClientApp/src/components/Dialogue/dialogue.scss");
var Dialogue = /** @class */ (function (_super) {
    __extends(Dialogue, _super);
    function Dialogue(props) {
        return _super.call(this, props) || this;
    }
    Dialogue.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { onClick: this.props.close, className: className.bak }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: className.content }, this.props.info)));
    };
    return Dialogue;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Dialogue);


/***/ }),

/***/ "./ClientApp/src/views/Home/home.scss":
/*!********************************************!*\
  !*** ./ClientApp/src/views/Home/home.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"whole":"_3r9GOMPhBXypPZFbZ5RZ_M","btn":"lCaPTMvicYE8eLjXcBlNb"};

/***/ }),

/***/ "./ClientApp/src/views/Home/homeComponent.tsx":
/*!****************************************************!*\
  !*** ./ClientApp/src/views/Home/homeComponent.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _components_Dialogue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Dialogue */ "./ClientApp/src/components/Dialogue/index.tsx");
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



var classNames = __webpack_require__(/*! ./home.scss */ "./ClientApp/src/views/Home/home.scss");
var HomeComponent = /** @class */ (function (_super) {
    __extends(HomeComponent, _super);
    function HomeComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            showDyy: false
        };
        return _this;
    }
    HomeComponent.prototype.openDialogue = function () {
        this.setState({
            showDyy: true
        });
    };
    HomeComponent.prototype.close = function () {
        this.setState({ showDyy: false });
    };
    HomeComponent.prototype.render = function () {
        var _this = this;
        var handleClick = this.props.handleClick;
        var dyy = this.state.showDyy ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Dialogue__WEBPACK_IMPORTED_MODULE_2__["default"], { info: "test info", close: function () { _this.close(); } }) : null;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classNames.whole },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { style: { fontFamily: "Avenir Next" } }, "A test frame for react practicing"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null, "Effects"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "javascript:void(0)", className: classNames.btn, onClick: function () { _this.openDialogue(); } }, "Dialogue"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null, "Pages:"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "javascript:void(0)", className: classNames.btn, onClick: handleClick }, "About me"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { className: classNames.bt, to: "/hello" }, "Hello Demo"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { className: classNames.btn, to: '/list' }, "Go to List"),
            dyy));
    };
    return HomeComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (HomeComponent);


/***/ }),

/***/ "./ClientApp/src/views/Home/index.tsx":
/*!********************************************!*\
  !*** ./ClientApp/src/views/Home/index.tsx ***!
  \********************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, mergeProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeProps", function() { return mergeProps; });
/* harmony import */ var _homeComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeComponent */ "./ClientApp/src/views/Home/homeComponent.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
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
    return {
        handleClick: function () {
            props.history.push("/about");
        }
    };
}
function mergeProps(stateProps, dispatchProps, ownProps) {
    return __assign({}, ownProps, stateProps, dispatchProps);
}
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps, mergeProps)(_homeComponent__WEBPACK_IMPORTED_MODULE_0__["default"]));


/***/ })

}]);
//# sourceMappingURL=1.js.map