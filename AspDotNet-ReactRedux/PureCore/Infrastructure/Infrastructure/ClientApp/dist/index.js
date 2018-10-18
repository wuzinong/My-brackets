import * as React from 'react';
import * as ReactDOM from 'react-dom';
import configureStore from './redux/store/configureStore';
import { AppContainer } from 'react-hot-loader';
import App from './router';
import './assets/styles/site.scss';
// ReactDOM.render(
//     <Home/>,
//     document.getElementById("container")
// )
var store = configureStore();
if (process.env.NODE_ENV === 'development') {
    var render = function (Component) {
        ReactDOM.render(React.createElement(AppContainer, null,
            React.createElement(Component, null)), document.getElementById('container'));
    };
    render(App);
    if (module.hot) {
        module.hot.accept();
    }
}
ReactDOM.render(React.createElement(App, null), document.getElementById('container'));
//# sourceMappingURL=index.js.map