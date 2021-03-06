// import * as React from 'react';

// export interface HelloProps{compiler:string;framework:string;}

// //stateless functional components
// // export const Hello = (props:HelloProps) => <h1>Hello from {props.compiler} and {props.framework}</h1>

// export class Hello extends React.Component<HelloProps,{}>{
//     render(){
//         return <h1>Hello from {this.props.compiler} and {this.props.framework}</h1>
//     }
// }
import * as React from 'react';
export interface Props{
    name:string;
    enthusiasmLevel?:number;
    onIncrement?:()=>void;
    onDecrement?:()=>void;
}

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
export default class Hello extends React.Component<Props, {}> {
    constructor(props: Props) {
      super(props);
    }
    render() {
      debugger;
      const { name, enthusiasmLevel = 1, onIncrement, onDecrement } = this.props;
  
      if (enthusiasmLevel < 0) {
        throw new Error('You could be a little more enthusiastic. :D');
      }
  
      return (
        <div className="hello">
          <div className="greeting">
            Hello {name + getExclamationMarks(enthusiasmLevel)}
          </div>
          <div>
            <button onClick={onDecrement}>-</button>
            <button onClick={onIncrement}>+</button>
          </div>
        </div>
      );
    }
  }

function getExclamationMarks(numChars:number){
    return Array(numChars+1).join('!');
}
