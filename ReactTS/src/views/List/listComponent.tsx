import React from 'react';
import List from '../../components/List';
import {Link} from 'react-router-dom'; 
import {ListData} from '../../types/index'
const classNames = require('./list.scss');



 
export default class ListComponent extends React.Component<ListData,ListData>{
    constructor(props:any){
        super(props);
        this.state={
            listData:[],
            listComponent:null
        };
    }
    search(){
        // let value = this.searchInput.value;
        // const {filterList} = this.props;
        // filterList(value);
    }
    render(){
        const {listData} = this.props;
        console.log(listData);
        return (<div className={classNames.listContainer+" mylist"}>
           <header><Link to="/">back &gt;</Link>This is a test list</header>
           {/* <div>
               <input ref={(value)=>this.searchInput = value} 
                      onKeyUp={()=>{this.search()}} type="text" placeholder="search ..."/>
            </div> */}
               <List listData={listData}/> 
        </div>)
    }
}