import {StoreState} from '../../types/index';
import {connect,Dispatch} from 'react-redux';
import AboutComponent from './aboutComponent';


export function mapStateToProps(){
    return {
    }
}
export function mapDispatchToProps(dispatch: Dispatch<Function>,props:any){
    return {
    }
}

export function mergeProps(stateProps:Object,dispatchProps:Object,ownProps:Object){
    return {...ownProps,...stateProps,...dispatchProps};
}



export default connect(mapStateToProps,mapDispatchToProps,mergeProps)(AboutComponent);