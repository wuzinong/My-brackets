import * as React from 'react';
import HomeComponent from './homeComponent';




export class Home extends React.Component{
    constructor(props:any){
      super(props);
    }
    render(){ 
        return ( 
         <HomeComponent/>
        )
    }
} 

export default Home;