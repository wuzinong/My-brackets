import * as React from 'react';
import * as ReactDOM  from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {Router,hashHistory} from 'react-router';
import routes from './router/router'


// ReactDOM.render(
//     <Home/>,
//     document.getElementById("container")
// )

const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
      <Router history={hashHistory} routes={routes} />
    </Provider>,
    document.getElementById('container') as HTMLElement
  );