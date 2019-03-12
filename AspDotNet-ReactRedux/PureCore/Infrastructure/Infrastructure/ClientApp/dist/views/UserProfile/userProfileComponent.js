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
import React from 'react';
import { UserProfileForm } from '../../components/Forms/index';
var UserProfileComponent = /** @class */ (function (_super) {
    __extends(UserProfileComponent, _super);
    function UserProfileComponent(props) {
        return _super.call(this, props) || this;
    }
    UserProfileComponent.prototype.render = function () {
        var userInfo = {
            userName: 'test',
            email: 'wuzinong@gmail.com',
            firstName: '232323',
            lastName: '22222',
            displayName: 'tset',
            country: 'China',
            language: 'English',
            mobile: '223123123123',
            showSpinner: true
        };
        return (React.createElement("div", { className: "container" },
            React.createElement(UserProfileForm, __assign({}, userInfo))));
    };
    return UserProfileComponent;
}(React.Component));
export default UserProfileComponent;
//# sourceMappingURL=userProfileComponent.js.map