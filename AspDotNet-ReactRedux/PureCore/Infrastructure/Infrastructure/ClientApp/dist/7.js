(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{129:function(t,e,n){"use strict";var r=n(2),o=n.n(r),a=n(0),i=n.n(a),c=n(5),u=n.n(c),p=n(14),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};function f(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var l=function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)},h=function(t){function e(){var n,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=f(this,t.call.apply(t,[this].concat(a))),r.handleClick=function(t){if(r.props.onClick&&r.props.onClick(t),!t.defaultPrevented&&0===t.button&&!r.props.target&&!l(t)){t.preventDefault();var e=r.context.router.history,n=r.props,o=n.replace,a=n.to;o?e.replace(a):e.push(a)}},f(r,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.render=function(){var t=this.props,e=(t.replace,t.to),n=t.innerRef,r=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(t,["replace","to","innerRef"]);u()(this.context.router,"You should not use <Link> outside a <Router>"),u()(void 0!==e,'You must specify the "to" property');var a=this.context.router.history,i="string"==typeof e?Object(p.b)(e,null,null,a.location):e,c=a.createHref(i);return o.a.createElement("a",s({},r,{onClick:this.handleClick,href:c,ref:n}))},e}(o.a.Component);h.propTypes={onClick:i.a.func,target:i.a.string,replace:i.a.bool,to:i.a.oneOfType([i.a.string,i.a.object]).isRequired,innerRef:i.a.oneOfType([i.a.string,i.a.func])},h.defaultProps={replace:!1},h.contextTypes={router:i.a.shape({history:i.a.shape({push:i.a.func.isRequired,replace:i.a.func.isRequired,createHref:i.a.func.isRequired}).isRequired}).isRequired},e.a=h},178:function(t,e){t.exports={listContainer:"_1rHbpGp21sNkMksLTfGhfw"}},410:function(t,e,n){"use strict";n.r(e);var r=n(36),o=n(2),a=n.n(o),i=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),c=function(t){function e(e){return t.call(this,e)||this}return i(e,t),e.prototype.render=function(){var t=this.props.listData;return a.a.createElement("ul",null,t.map(function(t,e){return a.a.createElement("li",{key:e},t)}))},e}(a.a.Component),u=n(129),p=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),s=n(178),f=function(t){function e(e){var n=t.call(this,e)||this;return n.state={listData:[],listComponent:null},n}return p(e,t),e.prototype.search=function(){},e.prototype.componentDidMount=function(){},e.prototype.fetchData=function(){(0,this.props.initList)()},e.prototype.render=function(){var t=this,e=this.props.listData,n=void 0===e?[]:e;return a.a.createElement("div",{className:s.listContainer+" mylist"},a.a.createElement("header",null,a.a.createElement(u.a,{to:"/"},"back >"),"This is a test list ",a.a.createElement("button",{onClick:function(){t.fetchData()}},"Get Data")),a.a.createElement(c,{listData:n}))},e}(a.a.Component),l=n(89);n.d(e,"mapStateToProps",function(){return y}),n.d(e,"mapDispatchToProps",function(){return b}),n.d(e,"mergeProps",function(){return d});var h=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t};function y(t){var e=t.list;return{listData:e.listData,listComponent:e.listComponent}}function b(t,e){return{initList:function(){t(Object(l.a)())}}}function d(t,e,n){return h({},n,t,e)}e.default=Object(r.b)(y,b,d)(f)}}]);