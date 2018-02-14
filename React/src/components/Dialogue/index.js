import React,{Component} from 'react';
import dialogueStyle from './dialogue.scss';
class Dialogue extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const{
           info
        } = this.props;
        return (
            <div>
               <div className={dialogueStyle.bak}></div>
               <div className={dialogueStyle.content}>
                   {this.props.info}
               </div>
            </div>
        )
    }
}
export default Dialogue
