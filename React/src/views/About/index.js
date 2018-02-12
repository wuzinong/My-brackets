import React,{Component} from 'react';
import style from './about.scss';
import {Link} from 'react-router-dom';

class About extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
          <div className={style.des}>
             <p>This is about page</p>
             <Link to="/home">return to home</Link>
          </div>
        )
    }
}

export default About;