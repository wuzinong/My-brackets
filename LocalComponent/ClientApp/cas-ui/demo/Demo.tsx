import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { Background } from 'cas-ui/src/components/Background/Background';
import { Block } from 'cas-ui/src/components/Block/Block';
import 'cas-ui/src/styles/global.scss';
import { initializeFontAwesome } from 'cas-ui/src/util/initializeFontAwesome';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './Demo.scss';
import { About } from './pages/About';
import { AnotherPage } from './pages/AnotherPage';
import { Classes } from './pages/Classes';
import { Elements } from './pages/Elements';
import { LayoutingDemo } from './pages/LayoutingDemo';
import { GridDemo } from './pages/GridDemo';
import { Overlays } from './pages/Overlays';

initializeFontAwesome();

const Demo = () => {
	return (
		<>
			<Router>
				<Block display="flex" flexDirection="column" height="100vh">
					<Block padding="32px" fontSize="20px" fontFamily="Comic Sans MS" color="hotpink">
						Digital Sales UI Library 🧙&nbsp;&nbsp;
						<Link to="/">About</Link>&nbsp;&nbsp;
						<Link to="/components">Components</Link>&nbsp;&nbsp;
						<Link to="/overlays">Overlays</Link>&nbsp;&nbsp;
						<Link to="/classes">CSS</Link>&nbsp;&nbsp;
						<Link to="/layouting">Layouting</Link>&nbsp;&nbsp;
						<Link to="/grid">Grid</Link>&nbsp;&nbsp;
					</Block>
					<Background>
						<Switch>
							<Route exact path="/">
								<About />
							</Route>
							<Route exact path="/components">
								<Elements />
							</Route>
							<Route exact path="/overlays">
								<Overlays />
							</Route>
							<Route exact path="/another-page">
								<AnotherPage />
							</Route>
							<Route exact path="/classes">
								<Classes />
							</Route>
							<Route exact path="/layouting">
								<LayoutingDemo />
							</Route>
							<Route exact path="/grid">
								<GridDemo />
							</Route>
						</Switch>
					</Background>
				</Block>
			</Router>
		</>
	);
};

render(<Demo />, document.getElementById('root'));
