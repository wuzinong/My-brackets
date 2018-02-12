import React,{Component} from 'react';
import {Link,BrowserRouter} from 'react-router-dom';
import homeStyle from'./home.scss';
import '../../assets/images/person.png';

class Home extends Component{
    constructor(props){
        super(props);
    }
    handleClick(name){
        
        console.log(this.props.history); 
        this.props.history.push("/about");
    }
    render(){
        return ( 
          <div className={homeStyle.test}>
           <button onClick={()=>{this.handleClick("/about")}}>Go to About</button> 
          </div> 
        )
    }
}
export default Home;