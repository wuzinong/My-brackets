import React from 'react';

import './index.scss';


class SearchBox extends React.Component{

    constructor(props:any){
        super(props);
    }
    render(){
        return <div className="search-wrapper">
            <div className="search-area">
                <input type="text" placeholder="Search in the marketplace"/>
            </div>
        </div>
    }
}


export default SearchBox;