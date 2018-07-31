import * as React from 'react';
import {Route,IndexRoute} from 'react-router';
import Hello from '../views/Hello';
import Home from '../views/Home'

export default (
    <Route path="/">
      <IndexRoute component={Hello}/>
      <Route path="/demo">
         <IndexRoute component={Hello}/>
      </Route>
      <Route path="/home">
         <IndexRoute component={Home}/>
      </Route>
    </Route>
)