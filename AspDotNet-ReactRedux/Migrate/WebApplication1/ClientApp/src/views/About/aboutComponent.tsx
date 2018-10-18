import React from 'react';
import {Link} from 'react-router-dom';
const classNames =require('./about.scss');

export default class AboutComponent extends React.Component{
    constructor(props:any){
        super(props);
    }
    render(){
        return (
          <div className={classNames.des}>
            <h1>About Me</h1>
            <p>
                This is Bran, and I'm a front end developer.
            </p>
            <Link to="/">return to home</Link>
         </div>
        )
    }
}