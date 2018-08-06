
import HomeComponent from './homeComponent';
 
import {connect,Dispatch} from 'react-redux';

export function mapStateToProps(){
    return {
    }
}
export function mapDispatchToProps(dispatch: Dispatch<Function>,props:any){
    return {
        handleClick(){
            props.history.push("/about");
         }
    }
}

export function mergeProps(stateProps:Object,dispatchProps:Object,ownProps:Object){
    return {...ownProps,...stateProps,...dispatchProps};
}



export default connect(mapStateToProps,mapDispatchToProps,mergeProps)(HomeComponent);