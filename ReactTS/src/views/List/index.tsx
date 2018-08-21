
import {connect,Dispatch} from 'react-redux';
import ListComponent from './listComponent';
import * as actions from '../../redux/actions/index';
import {getData} from '../../redux/reducers/list';
import {StoreState} from '../../types/index';

export function mapStateToProps({list:{listData,listComponent}}:StoreState){
    
    return {
        listData,
        listComponent
    }
}
export function mapDispatchToProps(dispatch: any,props:any){
    const initList = ()=>{
        debugger
        dispatch(getData());
    }
    return {
        initList:initList
    }
}
export function mergeProps(stateProps:Object,dispatchProps:Object,ownProps:Object){
    return {...ownProps,...stateProps,...dispatchProps};
}
export default connect(mapStateToProps,mapDispatchToProps,mergeProps)(ListComponent);