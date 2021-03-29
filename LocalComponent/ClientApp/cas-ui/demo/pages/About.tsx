import { Container } from 'cas-ui/src/components/Container/Container';
import { Panel } from 'cas-ui/src/components/Panel/Panel';
import React from 'react';

export const About = () => {
	return (
		<div className="cas-autostyled">
			<Container>
				<Panel>
					<h2>Prop conventions (work in progress)</h2>
					<p>These are some props that we're trying to make available on the components, when relevant:</p>
					<ul>
						<li>
							<code>spacing</code> - Applies sensible default spacing to the component (since by default they have no
							spacing).
						</li>
						<li>
							<code>tag</code> - The outermost HTML tag used for the component.
						</li>
						<li>
							<code>style</code> - Styles passed through to the outermost tag.
						</li>
						<li>
							<code>attr</code> - Attributes passed through to the outermost tag.
						</li>
					</ul>
				</Panel>
			</Container>
		</div>
	);
};
