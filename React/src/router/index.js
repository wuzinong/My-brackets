import React from 'react'; 
import {HashRouter,BrowserRouter,Router,Route,Switch,Link,index,Redirect} from 'react-router-dom';
import asyncComponent from '../components/AsuncComponents';
import Home from '../views/home/index.js'; 
//const About = require('bundle-loader?lazy&name=About-chunk!../views/about/index.js');
 

const About = asyncComponent(()=>import('../views/about/index.js'));
const NotFound = asyncComponent(()=>import('../views/notFound/index.js'));

const App =()=>(
      
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
);

export default App;