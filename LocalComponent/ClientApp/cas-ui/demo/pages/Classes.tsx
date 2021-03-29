import React from 'react';
import { Container } from 'cas-ui/src/components/Container/Container';
import { Panel } from 'cas-ui/src/components/Panel/Panel';

export const Classes = () => {
	return (
		<>
			<Container>
				<div className="cas-autostyled">
					<Panel>
						<h1 className="cas-h1">CSS class API</h1>
						<p className="cas-p">
							For styling plain HTML elements, a set of CSS classes are provided. The CSS class names are prefixed with{' '}
							<code>cas-</code>.
						</p>

						<p>
							There are two ways of styling: with the individual classes for each element, or using the{' '}
							<code>cas-autostyled</code> wrapper, within which the bare HTML elements are styled.
						</p>
					</Panel>
				</div>

				<Panel>
					<h2 className="cas-h2">Styling individual elements</h2>
					<hr />

					<h1 className="cas-h1">Hello</h1>
					<h2 className="cas-h2">Hello</h2>
					<h3 className="cas-h3">Hello</h3>
					<h4 className="cas-h4">Hello</h4>
					<h5 className="cas-h5">Hello</h5>

					<ul className="cas-ul">
						<li>Item 1</li>
						<li>Item 2</li>
						<li>Item 3</li>
						<li>Item 4</li>
					</ul>

					<ol className="cas-ol">
						<li>Item 1</li>
						<li>Item 2</li>
						<li>Item 3</li>
						<li>Item 4</li>
					</ol>

					<small className="cas-small">I'm a small little text</small>
				</Panel>

				<div className="cas-autostyled">
					<Panel>
						<h2>
							Using <code>cas-autostyled</code>
						</h2>
						<hr />

						<h1>Hello</h1>
						<h2>Hello</h2>
						<h3>Hello</h3>
						<h4>Hello</h4>
						<h5>Hello</h5>

						<ul>
							<li>Item 1</li>
							<li>Item 2</li>
							<li>Item 3</li>
							<li>Item 4</li>
						</ul>

						<ol>
							<li>Item 1</li>
							<li>Item 2</li>
							<li>Item 3</li>
							<li>Item 4</li>
						</ol>

						<small>I'm a small little text</small>
					</Panel>
				</div>
			</Container>
		</>
	);
};
