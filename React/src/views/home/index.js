import React,{Component} from 'react';
import homeStyle from'./home.scss';
import '../../assets/images/person.png';

class Home extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div className={homeStyle.test}>
           <button>Go to About</button>
        </div>;
    }
}
export default Home;