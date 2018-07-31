import * as React from 'react';
import * as ReactDOM  from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import Hello from './views/Hello';
import {Home} from './views/home';


// ReactDOM.render(
//     <Home/>,
//     document.getElementById("container")
// )

const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <Hello name="123"/>
    </Provider>,
    document.getElementById("container")
)