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
import * as React from 'react';
import { Link } from 'react-router-dom';
import Dialogue from '../../components/Dialogue';
var classNames = require('./home.scss');
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
        var dyy = this.state.showDyy ? React.createElement(Dialogue, { info: "test info", close: function () { _this.close(); } }) : null;
        return (React.createElement("div", { className: classNames.whole },
            React.createElement("p", { style: { fontFamily: "Avenir Next" } }, "A test frame for react practicing"),
            React.createElement("h3", null, "Effects"),
            React.createElement("a", { href: "javascript:void(0)", className: classNames.btn, onClick: function () { _this.openDialogue(); } }, "Dialogue"),
            React.createElement("h3", null, "Pages:"),
            React.createElement("a", { href: "javascript:void(0)", className: classNames.btn, onClick: handleClick }, "About me"),
            React.createElement(Link, { className: classNames.bt, to: "/hello" }, "Hello Demo"),
            React.createElement(Link, { className: classNames.btn, to: '/list' }, "Go to List"),
            React.createElement(Link, { className: classNames.btn, to: '/userprofile' }, "User profile"),
            dyy));
    };
    return HomeComponent;
}(React.Component));
export default HomeComponent;
//# sourceMappingURL=homeComponent.js.map