import React from 'react'; 
import {BrowserRouter,Route,Switch,Link,index} from 'react-router-dom';

import Home from '../views/home/index.js';

 import About from '../views/about/index.js';



const App =()=>(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home}></Route>   
                <Route path="/about" component={About}></Route>
            </Switch>
        </BrowserRouter>
);

export default App;