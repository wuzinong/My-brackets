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
import { Link } from 'react-router-dom';
var classNames = require('./about.scss');
var AboutComponent = /** @class */ (function (_super) {
    __extends(AboutComponent, _super);
    function AboutComponent(props) {
        return _super.call(this, props) || this;
    }
    AboutComponent.prototype.render = function () {
        return (React.createElement("div", { className: classNames.des },
            React.createElement("h1", null, "About Me"),
            React.createElement("p", null, "This is Bran, and I'm a front end developer."),
            React.createElement(Link, { to: "/" }, "return to home")));
    };
    return AboutComponent;
}(React.Component));
export default AboutComponent;
//# sourceMappingURL=aboutComponent.js.map