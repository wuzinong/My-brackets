import React from 'react';
import {connect,Dispatch} from 'react-redux';
import ListComponent from './listComponent';
import * as actions from '../../redux/actions/index';

export function mapStateToProps(dispatch: Dispatch<Function>){
   
    // const filterList = (name:string)=>{
    //     dispatch(filterData(name));
    // }

    return {

    }
}
export function mapDispatchToProps(dispatch: Dispatch<Function>,props:any){
    const initList = ()=>{
        dispatch(actions.getList());
    }
    return {
        
    }
}
export function mergeProps(stateProps:Object,dispatchProps:Object,ownProps:Object){
    return {...ownProps,...stateProps,...dispatchProps};
}
export default connect(mapStateToProps,mapDispatchToProps,mergeProps)(ListComponent);