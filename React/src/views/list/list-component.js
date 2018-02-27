import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import listStyle from './list.scss';
import ListComponent from '../../components/Lists/index.js';
import axios from 'axios';

class List extends Component{
    constructor(props){
        super(props);
        this.state={
            searchValue:"test",
            listData:[],
            listComponent:null
        };
    }
    search(){ 
        let value = this.searchInput.value;
        let arr = this.state.listData.filter(item=>item.indexOf(value)>=0);
        this.setState({
            listComponent:<ListComponent listData={arr}/>
        });
    }
    componentDidMount(){
        axios.get("http://127.0.0.1:10010/data").then((response)=>{
            this.setState({
                listData:response.data,
                listComponent:<ListComponent listData={response.data}/>
            });
        }); 
    }
    render(){ 
        
        return <div className={listStyle.listContainer+" mylist"}>
           <header><Link to="/">back &gt;</Link>This is a test list</header>
           <div>
               <input ref={(value)=>this.searchInput = value} 
                      onKeyUp={()=>{this.search()}} type="text" placeholder="search ..."/></div>
           {this.state.listComponent}
                      
        </div>
    }
}

export default List;