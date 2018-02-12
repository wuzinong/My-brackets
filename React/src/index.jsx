import React from 'react';
import ReactDOM from 'react-dom';
import Home from './views/home/index.js';
import App from './router/index.js';

if(process.env.NODE_ENV==='development'){
    ReactDOM.render(<App/>,document.getElementById("container"));
}else{
    ReactDOM.render(<App/>,document.getElementById("container"));
}
