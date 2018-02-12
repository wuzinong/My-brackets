import React from 'react';
import ReactDOM from 'react-dom';
import Home from './views/home/index.js';

if(process.env.NODE_ENV==='development'){
    ReactDOM.render(<Home/>,document.getElementById("container"));
}else{
    ReactDOM.render(<Home/>,document.getElementById("container"));
}
