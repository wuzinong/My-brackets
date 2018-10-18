// import * as React from 'react';
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
// export interface HelloProps{compiler:string;framework:string;}
// //stateless functional components
// // export const Hello = (props:HelloProps) => <h1>Hello from {props.compiler} and {props.framework}</h1>
// export class Hello extends React.Component<HelloProps,{}>{
//     render(){
//         return <h1>Hello from {this.props.compiler} and {this.props.framework}</h1>
//     }
// }
import * as React from 'react';
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
        return (React.createElement("div", { className: "hello" },
            React.createElement("div", { className: "greeting" },
                "Hello ",
                name + getExclamationMarks(enthusiasmLevel)),
            React.createElement("div", null,
                React.createElement("button", { onClick: onDecrement }, "-"),
                React.createElement("button", { onClick: onIncrement }, "+"))));
    };
    return Hello;
}(React.Component));
export default Hello;
function getExclamationMarks(numChars) {
    return Array(numChars + 1).join('!');
}
//# sourceMappingURL=Hello.js.map