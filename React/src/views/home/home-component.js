import React,{Component} from 'react';
import {Link,BrowserRouter} from 'react-router-dom';
import homeStyle from'./home.scss';
import '../../assets/images/person.png';

class Home extends Component{
    constructor(props){
        super(props);
    }
    openDialogue(){
        console.log("open");
    }
    render(){ 
        const {
            handleClick
        } = this.props;
        
        return ( 
          <div className={homeStyle.whole}>
            <p>A test frame for react practicing</p>
            <h3>Effects</h3>
            <button onClick={()=>{this.openDialogue()}}>Dialogue</button>
            <h3>Pages:</h3>
            <button onClick={handleClick}>Go to About</button> 
          </div> 
        )
    }
}
export default Home;