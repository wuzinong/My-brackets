import React,{Component} from 'react';
import {Link,BrowserRouter} from 'react-router-dom';
import homeStyle from'./home.scss';
import '../../assets/images/person.png';

class Home extends Component{
    constructor(props){
        super(props);
    }
    render(){ 
        const {
            handleClick
        } = this.props;
        
        return ( 
          <div className={homeStyle.test}>
           <button onClick={handleClick}>Go to About</button> 
          </div> 
        )
    }
}
export default Home;