import * as React from 'react';
import {Link} from 'react-router-dom';
import Dialogue from '../../components/Dialogue';
const classNames = require('./home.scss');


interface MyProps{
    handleClick:any;
}
interface MyState{
    showDyy?:boolean;
}

class HomeComponent extends React.Component<MyProps,MyState>{
    constructor(props:any){
        super(props);
        this.state = {
            showDyy:false
        };
    }
    openDialogue(){
        this.setState({
            showDyy:true
        });
    }
    close(){
        this.setState({showDyy:false});
    }
    render(){ 
        const {
            handleClick
        } = this.props;
        var dyy = this.state.showDyy? <Dialogue info="test info" close={()=>{this.close()}}/>:null;
        return ( 
          <div className={classNames.whole}>
            <p>A test frame for react practicing</p>
            <h3>Effects</h3>
            <a href="javascript:void(0)" className={classNames.btn} onClick={()=>{this.openDialogue()}}>Dialogue</a>
            <h3>Pages:</h3>
            <a href="javascript:void(0)" className={classNames.btn} onClick={handleClick}>About me</a> 
            <Link className={classNames.bt} to="/hello">Hello Demo</Link>
            {dyy}
          </div> 
        )
    }
}
export default HomeComponent;