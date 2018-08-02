import * as React from 'react';
import * as ReactDOM  from 'react-dom';
import configureStore from './store/configureStore';
import App from './router/index';


// ReactDOM.render(
//     <Home/>,
//     document.getElementById("container")
// )

const store = configureStore();
ReactDOM.render(
    <App/>,
    document.getElementById('container') as HTMLElement
  );