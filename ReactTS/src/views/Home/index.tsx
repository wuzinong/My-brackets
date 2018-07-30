import * as React from 'react';


export class Home extends React.Component{
    constructor(props:any){
      super(props);
    }
    render(){ 
        return ( 
          <div>
            <p>A test frame for react practicing</p>
            <h3>Effects</h3>
            <a href="javascript:void(0)" >Dialogue</a>
            <h3>Pages:</h3>
            <a href="javascript:void(0)">Go to About</a> 
          </div> 
        )
    }
} 