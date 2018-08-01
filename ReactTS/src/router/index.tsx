import * as React from 'react';
import {HashRouter,BrowserRouter,Router,Route,Switch,Link,Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';
import Hello from '../views/Hello';
import Home from '../views/Home';
import NotFound from '../views/NotFound';
const store = configureStore();

const App =()=>(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/Hello" 
                        component = {Hello}
                    ></Route>
                    <Route path="/Home" 
                        component = {Home}
                    ></Route>
                    <Route path="/NotFound"
                      component = {NotFound}
                    ></Route>
                     
                    <Redirect exact path='*' to='/NotFound'></Redirect>
            </Switch>
        </HashRouter>
    </Provider>
)
export default App;