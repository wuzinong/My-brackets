
import {connect,Dispatch} from 'react-redux';
import ListComponent from './listComponent';
import * as actions from '../../redux/actions/index';
import {ListData} from '../../types/index';

export function mapStateToProps({listData,listComponent}:ListData){
    
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