
import {connect,Dispatch} from 'react-redux';
import UserProfileComponent from './userProfileComponent';

export function mapStateToProps(){
    return {}
}
export function mapDispatchToProps(){
    return {}
}
export function mergeProps(stateProps:Object,dispatchProps:Object,ownProps:Object){
    return {...ownProps,...stateProps,...dispatchProps};
}


export default connect(mapStateToProps,mapDispatchToProps,mergeProps)(UserProfileComponent);