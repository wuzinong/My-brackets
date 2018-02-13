import React from 'react'; 
import {HashRouter,BrowserRouter,Route,Switch,Link,index,Redirect} from 'react-router-dom';
 
import Home from '../views/home/index.js';
import NotFound from '../views/notFound/index.js';
//const About = require('bundle-loader?lazy&name=About-chunk!../views/about/index.js');
 


import About from '../views/about/index.js';
const isReactComponent = (obj) => Boolean(obj && obj.prototype && Boolean(obj.prototype.isReactComponent));
const component = (component) => {
    return isReactComponent(component)
      ? {component}
      : {getComponent: (loc, cb)=> component(
           comp=> cb(null, comp.default || comp))}
  };


const App =()=>(
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                 
                <Route path="/about" 
                      component={About}
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