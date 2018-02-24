import React from 'react';
import {connect} from 'react-redux';
import ListComponent from './list-component';

const mapDispatchToProps = (dispatch,props)=>{
    return {}
}
const mapStateToProps = (state)=>{
    return {

    }
}

const List = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListComponent);
export default List;