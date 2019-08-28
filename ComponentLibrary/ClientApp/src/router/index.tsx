import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { myStore, myHis } from '../redux/store/configureStore';
import AsyncComponent from '../libs/AsyncComponents';

const Home = AsyncComponent(() => import('../views/Home'));
const Product = AsyncComponent(() => import('../views/Product'));

class App extends React.Component<{}> {
    state = { initDone: false };

    constructor(props: any) {
        super(props);
    }

    async componentDidMount() {
        this.setState({ initDone: true });
    }

    render() {
        return (
            this.state.initDone ?
                (
                    <Provider store={myStore}>
                        <ConnectedRouter history={myHis}>
                            <Switch>
                                <Route path="/product/:slug" render={() => <Product />} />
                                <Route path="/" render={() => <Home />} />
                            </Switch>
                        </ConnectedRouter>
                    </Provider>
                ) : <div>Loading...</div>
        );
    }
}

export default App;