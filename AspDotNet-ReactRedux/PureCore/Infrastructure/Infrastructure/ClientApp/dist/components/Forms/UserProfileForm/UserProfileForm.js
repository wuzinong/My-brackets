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
import { Link } from 'react-router-dom';
import './index.scss';
import { emailReg } from '../../../libs/RegExpression';
var UserProfileForm = /** @class */ (function (_super) {
    __extends(UserProfileForm, _super);
    function UserProfileForm(props) {
        var _this = _super.call(this, props) || this;
        _this.handleValueChange = function (name, event) {
            var result = _this.formValidation(name, event.target.value);
            switch (event.target.tagName) {
                case 'SELECT':
                case 'INPUT': {
                    _this.setState(__assign({}, _this.state, result));
                }
                default: break;
            }
        };
        _this.formValidation = function (fieldName, value) {
            var _a;
            var tempObj = {
                value: value,
                isValid: true,
                message: ""
            };
            switch (fieldName) {
                case "userName":
                    {
                        if (value === "") {
                            tempObj.message = "please enter your user name";
                            tempObj.isValid = false;
                        }
                        else {
                            if (value.length < 6) {
                                tempObj.message = "please enter at leaset 6 charactors";
                                tempObj.isValid = false;
                            }
                            else {
                                tempObj.message = "";
                                tempObj.isValid = true;
                            }
                        }
                    }
                    break;
                case "email":
                    {
                        if (value === "") {
                            tempObj.message = "please enter your email";
                            tempObj.isValid = false;
                        }
                        else {
                            if (emailReg.test(value)) {
                                tempObj.message = "";
                                tempObj.isValid = true;
                            }
                            else {
                                tempObj.message = "please enter a valid email address";
                                tempObj.isValid = false;
                            }
                        }
                    }
                    break;
                case "firstName":
                    {
                        if (value === "") {
                            tempObj.message = "please enter your fristName";
                            tempObj.isValid = false;
                        }
                        else {
                            tempObj.message = "";
                            tempObj.isValid = true;
                        }
                    }
                    break;
                case "lastName":
                    {
                        if (value === "") {
                            tempObj.message = "please enter your lastName";
                            tempObj.isValid = false;
                        }
                        else {
                            tempObj.message = "";
                            tempObj.isValid = true;
                        }
                    }
                    break;
                case "displayName":
                    {
                        if (value === "") {
                            tempObj.message = "please enter your displayName";
                            tempObj.isValid = false;
                        }
                        else {
                            tempObj.message = "";
                            tempObj.isValid = true;
                        }
                    }
                    break;
                default:
                    break;
            }
            return _a = {},
                _a[fieldName] = __assign({}, tempObj),
                _a;
        };
        _this.submitForm = function (e) {
            var isValid = true;
            Object.keys(_this.state).forEach(function (key) {
                var state = _this.state;
                isValid = isValid && state[key].isValid;
            });
            var profile = {
                userName: _this.state.userName.value,
                email: _this.state.email.value,
                firstName: _this.state.firstName.value,
                lastName: _this.state.lastName.value,
                displayName: _this.state.displayName.value,
                language: _this.state.language.value,
                country: _this.state.country.value,
                mobile: _this.state.mobile.value
            };
            if (isValid) {
                //this.props.updateUserProfile(profile);
                alert("validation passed");
            }
        };
        _this.state = {
            userName: {
                value: _this.props.userName,
                isValid: true,
                message: ""
            },
            email: {
                value: _this.props.email,
                isValid: true,
                message: "",
            },
            firstName: {
                value: _this.props.firstName,
                isValid: true,
                message: "",
            },
            lastName: {
                value: _this.props.lastName,
                isValid: true,
                message: "",
            },
            displayName: {
                value: _this.props.displayName,
                isValid: true,
                message: "",
            },
            country: {
                value: _this.props.country,
                isValid: true,
                message: "",
            },
            language: {
                value: _this.props.language,
                isValid: true,
                message: "",
            },
            mobile: {
                value: _this.props.mobile,
                isValid: true,
                message: "",
            }
        };
        return _this;
    }
    UserProfileForm.prototype.componentWillReceiveProps = function (props) {
        this.setState(__assign({}, props));
    };
    UserProfileForm.prototype.render = function () {
        return (React.createElement("form", { action: "" },
            React.createElement("h1", null, "gu, xiehai"),
            React.createElement("hr", null),
            React.createElement("h2", null, "Edit profile"),
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-md-6" }, "You can change your name and details in the fields below.")),
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-md-12 form-area" },
                    React.createElement("label", { htmlFor: "" }, "User name"),
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-md-6" },
                            React.createElement("input", { id: "userName", value: this.state.userName.value, className: "form-control", type: "text", onChange: this.handleValueChange.bind(this, 'userName') }),
                            !this.state.userName.isValid ? React.createElement("label", { htmlFor: "userName", className: "form-tip error-info" }, this.state.userName.message) : null))),
                React.createElement("div", { className: "col-md-12 form-area" },
                    React.createElement("label", { htmlFor: "" }, "Email address*"),
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-md-6" },
                            React.createElement("input", { id: "email", value: this.state.email.value, className: "form-control", type: "text", onChange: this.handleValueChange.bind(this, 'email') }),
                            !this.state.email.isValid ? React.createElement("label", { htmlFor: "email", className: "form-tip error-info" }, this.state.email.message) : null))),
                React.createElement("div", { className: "col-md-12 form-area" },
                    React.createElement("label", { htmlFor: "" }, "First name*"),
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-md-6" },
                            React.createElement("input", { value: this.state.firstName.value, className: "form-control", type: "text", onChange: this.handleValueChange.bind(this, 'firstName') }),
                            !this.state.firstName.isValid ? React.createElement("label", { htmlFor: "firstName", className: "form-tip error-info" }, this.state.firstName.message) : null))),
                React.createElement("div", { className: "col-md-12 form-area" },
                    React.createElement("label", { htmlFor: "" }, "Last name*"),
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-md-6" },
                            React.createElement("input", { value: this.state.lastName.value, className: "form-control", type: "text", onChange: this.handleValueChange.bind(this, 'lastName') }),
                            !this.state.lastName.isValid ? React.createElement("label", { htmlFor: "lastName", className: "form-tip error-info" }, this.state.lastName.message) : null))),
                React.createElement("div", { className: "col-md-12 form-area" },
                    React.createElement("label", { htmlFor: "" }, "Display name"),
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-md-6" },
                            React.createElement("input", { value: this.state.displayName.value, className: "form-control", type: "text", onChange: this.handleValueChange.bind(this, 'displayName') }),
                            !this.state.displayName.isValid ? React.createElement("label", { htmlFor: "displayName", className: "form-tip error-info" }, this.state.displayName.message) : null))),
                React.createElement("div", { className: "col-md-12 form-area" },
                    React.createElement("label", { htmlFor: "" }, "Country*"),
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-md-6" },
                            React.createElement("select", { value: this.state.country.value, className: "form-control", name: "", id: "", onChange: this.handleValueChange.bind(this, 'country') },
                                React.createElement("option", { value: "China" }, "China"),
                                React.createElement("option", { value: "Norway" }, "norway"))))),
                React.createElement("div", { className: "col-md-12 form-area" },
                    React.createElement("label", { htmlFor: "" }, "Language"),
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-md-6" },
                            React.createElement("select", { value: this.state.language.value, className: "form-control", onChange: this.handleValueChange.bind(this, 'language') },
                                React.createElement("option", { value: "English" }, "English-English"),
                                React.createElement("option", { value: "Chinese" }, "Chinese"))))),
                React.createElement("div", { className: "col-md-12 form-area" },
                    React.createElement("label", { htmlFor: "" }, "Phone number"),
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-md-6" },
                            React.createElement("input", { value: this.state.mobile.value, className: "form-control", type: "text", onChange: this.handleValueChange.bind(this, 'mobile') })),
                        React.createElement("div", { className: "col-md-6" },
                            React.createElement("p", null, "Phone number should start with country code and preferably be a mobile phone number.")))),
                React.createElement("div", { className: "col-md-12 form-area" },
                    React.createElement("button", { type: "button", onClick: this.submitForm, className: "btn btn-primary" }, "SAVE CHANGES"),
                    "\u00A0\u00A0\u00A0\u00A0",
                    React.createElement(Link, { className: "btn btn-cancel", to: '/' }, "CANCEL")))));
    };
    return UserProfileForm;
}(React.Component));
export default UserProfileForm;
//# sourceMappingURL=UserProfileForm.js.map