import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import listStyle from './list.scss';
import ListComponent from '../../components/Lists/index.js';

class List extends Component{
    constructor(props){
        super(props);
        this.state={searchValue:"test"};
    }
    search(){ 
        console.log(this.searchInput.value);
    }
    render(){
        let listData = ["aaa","bbb"];
        return <div className={listStyle.listContainer+" mylist"}>
           <header><Link to="/">back &gt;</Link>This is a test l</header>
           <div>
               <input ref={(value)=>this.searchInput = value} 
                      onKeyUp={()=>{this.search()}} type="text" placeholder="search ..."/></div>
           <ListComponent listData={listData}/>
        </div>
    }
}

export default List;