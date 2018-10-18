import initState from '../store/initState';
import {GET_LIST,Filter_LIST,INIT_LIST} from '../constants';
import {ListAction,initList} from '../actions/index';
import {ListData} from '../../types';
import axios from 'axios';
import {Dispatch} from 'react-redux';

export function handleListData(state:ListData=initState.list,action:ListAction):ListData{
    switch (action.type){
        case INIT_LIST:{
            const {listData} = action;
            return {...state,...{listData:listData}};
            // let mylist =  [
            //     "test1",
            //     "test2"
            // ];
            // return {...state,...{listData:mylist}};
        }
        case GET_LIST:{
            axios.get("http://127.0.0.1:10010/api/data").then((response)=>{
                let mylist =  response.data;
                debugger;
                
                return {...state,...{listData:mylist}};
            });
            // let mylist =  [
            //     "test1",
            //     "test2"
            // ];
            // return {...state,...{listData:mylist}};
         }
        // case Filter_LIST:{
        //     const {name} = action; 
        //     return {...state,enthusiasmLevel:Math.max(1,state.enthusiasmLevel-1)};
        // }
        default:
           return state;  
    }
}

const getData =()=> (dispatch:Dispatch<Function>):void=>{
    axios.get("http://127.0.0.1:10010/api/data").then((response)=>{
        dispatch(initList(response.data));
   });
}

export {
    getData
}