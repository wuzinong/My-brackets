import initState from '../store/initState';

import {INIT_USERPROFILE} from '../constants'
import {initUserProfile,INIT_USERPROFILE as U_Action} from '../actions/index'
import axios from 'axios';
import {Dispatch} from 'react-redux';
import { UserProfile } from 'types';
import { API_MY_PROFILE_MOCK, API_MY_UPDATE_MOCK } from '../../consts'

export function handleUserProfile(state:UserProfile=initState.userInfo,action:U_Action):UserProfile{
    switch(action.type){
        case INIT_USERPROFILE:{
           return {
               ...state,
               ...action.userInfo
           }
        }break;
        default:
         return state;
    }
}

const getUserProfile = ()=>(dispatch:Dispatch<Function>):void=>{
    axios.get(API_MY_PROFILE_MOCK).then((response)=>{
        dispatch(initUserProfile(response.data));
    }).catch(error=>{
        console.log("Get an error");
        console.log(error);
    })
}
export {
    getUserProfile
}