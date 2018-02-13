import React from 'react'; 
import {HashRouter,BrowserRouter,Router,Route,Switch,Link,index,Redirect} from 'react-router-dom';
import asyncComponent from '../components/AsuncComponents';
import Home from '../views/home'; 
//const About = require('bundle-loader?lazy&name=About-chunk!../views/about/index.js');
import {Provider} from 'react-redux';
import store from '../store';

const About = asyncComponent(()=>import('../views/about'));
const NotFound = asyncComponent(()=>import('../views/notFound'));

const App =()=>(
      <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                 
                <Route path="/about" 
                       component = {About}
                    >
                </Route>
                <Route path="/notFound"
                      component = {NotFound}
                    >
                </Route>
                <Redirect exact path='*' to='/notFound'></Redirect>
            </Switch>
        </HashRouter>
   </Provider>
);

export default App;