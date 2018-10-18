import React,{Component} from 'react';
// import dialogueStyle from './dialogue.scss';
// export interface Props{
//     close:()=>void;
//     info:string;
// }
import {Props} from '../../types/components/dialogue';

const className = require('./dialogue.scss');


class Dialogue extends Component<Props,{}>{
    constructor(props:any){
        super(props)
    }
    render(){
        return (
            <div>
               <div onClick ={this.props.close} className={className.bak}></div>
               <div className={className.content}>
                   {this.props.info}
               </div>
            </div>
        )
    }
}
export default Dialogue