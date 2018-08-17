
import {connect,Dispatch} from 'react-redux';
import ListComponent from './listComponent';
import * as actions from '../../redux/actions/index';
import {StoreState} from '../../types/index';

export function mapStateToProps({list:{listData,listComponent}}:StoreState){
    
    return {
        listData,
        listComponent
    }
}
export function mapDispatchToProps(dispatch: Dispatch<Function>,props:any){
    const initList = ()=>{
        dispatch(actions.getList());
    }
    return {
        initList:initList
    }
}
export function mergeProps(stateProps:Object,dispatchProps:Object,ownProps:Object){
    return {...ownProps,...stateProps,...dispatchProps};
}
export default connect(mapStateToProps,mapDispatchToProps,mergeProps)(ListComponent);