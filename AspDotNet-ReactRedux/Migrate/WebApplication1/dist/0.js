(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./ClientApp/src/components/Hello.tsx":
/*!********************************************!*\
  !*** ./ClientApp/src/components/Hello.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// import * as React from 'react';
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
// export interface HelloProps{compiler:string;framework:string;}
// //stateless functional components
// // export const Hello = (props:HelloProps) => <h1>Hello from {props.compiler} and {props.framework}</h1>
// export class Hello extends React.Component<HelloProps,{}>{
//     render(){
//         return <h1>Hello from {this.props.compiler} and {this.props.framework}</h1>
//     }
// }

// export default function Hello({name,enthusiasmLevel=1,onIncrement,onDecrement}:Props){
//     if(enthusiasmLevel<=0){
//         throw new Error("Be more enthusiastic");
//     }
//     return (
//       <div className="hello">
//          <div className="greeting">
//             Hello {name+getExclamationMarks(enthusiasmLevel)}
//          </div>
//          <div>
//              <button onClick={onDecrement}>-</button>
//              <button onClick={onIncrement}>+</button>
//          </div>
//       </div>
//     )
// }
var Hello = /** @class */ (function (_super) {
    __extends(Hello, _super);
    function Hello(props) {
        return _super.call(this, props) || this;
    }
    Hello.prototype.render = function () {
        debugger;
        var _a = this.props, name = _a.name, _b = _a.enthusiasmLevel, enthusiasmLevel = _b === void 0 ? 1 : _b, onIncrement = _a.onIncrement, onDecrement = _a.onDecrement;
        if (enthusiasmLevel < 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "hello" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "greeting" },
                "Hello ",
                name + getExclamationMarks(enthusiasmLevel)),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { onClick: onDecrement }, "-"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { onClick: onIncrement }, "+"))));
    };
    return Hello;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Hello);
function getExclamationMarks(numChars) {
    return Array(numChars + 1).join('!');
}


/***/ }),

/***/ "./ClientApp/src/views/Hello/index.tsx":
/*!*********************************************!*\
  !*** ./ClientApp/src/views/Hello/index.tsx ***!
  \*********************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, mergeProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeProps", function() { return mergeProps; });
/* harmony import */ var _components_Hello__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Hello */ "./ClientApp/src/components/Hello.tsx");
/* harmony import */ var _redux_actions_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../redux/actions/index */ "./ClientApp/src/redux/actions/index.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



function mapStateToProps(_a) {
    var _b = _a.demo, enthusiasmLevel = _b.enthusiasmLevel, languageName = _b.languageName;
    return {
        enthusiasmLevel: enthusiasmLevel,
        name: languageName
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onIncrement: function () { return dispatch(_redux_actions_index__WEBPACK_IMPORTED_MODULE_1__["incrementEnthusiasm"]()); },
        onDecrement: function () { return dispatch(_redux_actions_index__WEBPACK_IMPORTED_MODULE_1__["decrementEnthusiasm"]()); }
    };
}
function mergeProps(stateProps, dispatchProps, ownProps) {
    // return Object.assign({},ownProps,stateProps,dispatchProps);
    return __assign({}, ownProps, stateProps, dispatchProps);
}
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps, mergeProps)(_components_Hello__WEBPACK_IMPORTED_MODULE_0__["default"]));


/***/ })

}]);
//# sourceMappingURL=0.js.map