import React,{Component} from 'react';
import st
class Dialogue extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const{
           headerText,
           info
        } = this.props;
        return (
            <div>
               <div className="bak"></div>
               <div className="dialogue">
               </div>
            </div>
        )
    }
}
export default Dialogue
