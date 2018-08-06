import React from 'react';
import {ListData} from '../../types/index';


export default class List extends React.Component<ListData>{
    constructor(props:any){
        super(props);
    }
    render(){
        const {listData} = this.props;
        return(
            <ul>
                {listData.map((item,index)=>{
                return <li key={index}>{item}</li>
                })}
            </ul>

        )
    }
}