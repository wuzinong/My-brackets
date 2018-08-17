import initState from '../store/initState';
import {GET_LIST,Filter_LIST} from '../constants';
import {ListAction} from '../actions/index';
import {ListData} from '../../types';
import axios from 'axios';


export function handleListData(state:ListData=initState.list,action:ListAction):ListData{
    switch (action.type){
        case GET_LIST:{
            // axios.get("http://127.0.0.1:10010/api/data").then((response)=>{
            //     let mylist =  response.data;
                
            //     return Object.assign({},state,{listData:mylist});
            //     // return {{},...state,...{listData:list}};
            // });
            let mylist =  [
                "test1",
                "test2"
            ];
            return {...state,...{listData:mylist}};
         }
        // case Filter_LIST:{
        //     const {name} = action; 
        //     return {...state,enthusiasmLevel:Math.max(1,state.enthusiasmLevel-1)};
        // }
        default:
           return state;  
    }
    return state
}