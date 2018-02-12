import React from 'react'; 
import {BrowserRouter,Route,Switch,Link,index} from 'react-router-dom';
 
import Home from '../views/home/index.js';


var load = require('promise?../views/about/index.js');

 //import About from '../views/about/index.js';
// let About = null;
// import('../views/home/index.js').then((module)=>{
//     About = module;
// });

// const About = (location, callback) => {
//     require.ensure([], function (require) {
//         callback(null, require('../views/about/index.js').default);
//     }, 'HomeContainer');
// };
 

const App =()=>(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                 
                <Route path="/about" 
                      component={()=>load().then(function(file){return file})}
                    >
                </Route>
            </Switch>
        </BrowserRouter>
);

export default App;