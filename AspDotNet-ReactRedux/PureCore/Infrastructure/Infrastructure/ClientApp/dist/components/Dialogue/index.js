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
import React, { Component } from 'react';
var className = require('./dialogue.scss');
var Dialogue = /** @class */ (function (_super) {
    __extends(Dialogue, _super);
    function Dialogue(props) {
        return _super.call(this, props) || this;
    }
    Dialogue.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("div", { onClick: this.props.close, className: className.bak }),
            React.createElement("div", { className: className.content }, this.props.info)));
    };
    return Dialogue;
}(Component));
export default Dialogue;
//# sourceMappingURL=index.js.map