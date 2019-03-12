import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../redux/store/configureStore';
import asyncComponent from '../libs/AsyncComponents';
// import Loadable from 'react-loadable';
// import Loading from '../components/loading';
// import Hello from '../views/Hello';
// import Home from '../views/Home';
// import NotFound from '../views/NotFound';
// import About from '../views/About';
// import List from '../views/List';
// import UserProfile from '../views/UserProfile';
var Hello = asyncComponent(function () { return import('../views/Hello'); });
var Home = asyncComponent(function () { return import('../views/Home'); });
var NotFound = asyncComponent(function () { return import('../views/NotFound'); });
var About = asyncComponent(function () { return import('../views/About'); });
var List = asyncComponent(function () { return import('../views/List'); });
var UserProfile = asyncComponent(function () { return import('../views/UserProfile'); });
// function MyLoading(){
//     return <div>Loading...</div>
// }
// const Hello = Loadable({
//    loader:()=>import('../views/Hello/index'),
//    loading:MyLoading
// });
// const Home = Loadable({
//     loader:()=>import('../views/Home/index'),
//     loading:MyLoading
//  });
//  const NotFound = Loadable({
//     loader:()=>import('../views/NotFound/index'),
//     loading:MyLoading
//  });
var store = configureStore();
var App = function () { return (React.createElement(Provider, { store: store },
    React.createElement(BrowserRouter, null,
        React.createElement(Switch, null,
            React.createElement(Route, { exact: true, path: "/", component: Home }),
            React.createElement(Route, { path: "/Hello", component: Hello }),
            React.createElement(Route, { path: "/Home", component: Home }),
            React.createElement(Route, { path: "/NotFound", component: NotFound }),
            React.createElement(Route, { path: "/About", component: About }),
            React.createElement(Route, { path: "/List", component: List }),
            React.createElement(Route, { path: "/UserProfile", component: UserProfile }),
            React.createElement(Redirect, { exact: true, path: '*', to: '/NotFound' }))))); };
export default App;
//# sourceMappingURL=index.js.map