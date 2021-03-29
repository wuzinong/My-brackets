import { Alert } from 'cas-ui/src/components/Alert/Alert';
import { Block } from 'cas-ui/src/components/Block/Block';
import { Container } from 'cas-ui/src/components/Container/Container';
import { FlexRow } from 'cas-ui/src/components/FlexRow/FlexRow';
import { Panel } from 'cas-ui/src/components/Panel/Panel';
import { useScreenWidth } from 'cas-ui/src/util/useScreenWidth';
import React from 'react';

export const LayoutingDemo = () => {
	const screenWidth = useScreenWidth();
	const isSmallScreen = screenWidth < 900;

	return (
		<>
			<Container>
				<Panel>
					<div className="cas-autostyled">
						<h1>Layouting</h1>
						<p>
							The components in the UI library try to stay unopinionated about spacing and how they're positioned in the
							page's layout.
						</p>
						<p>
							So when building a page with the styles and components of this UI library, you might end up having to
							write a good bit of positioning CSS, like padding, margins, transforms and simple flex layouts
						</p>

						<h2>
							<code>spacing</code> prop on UI components
						</h2>
						<p>
							For the sake of flexibility and predictability, the React components in the UI library by default have no
							spacing around them. The components do however have (or are supposed to have.. 🙃) a prop{' '}
							<code>spacing</code>, which applies some sensible default spacing - similar to how the{' '}
							<code>cas-autostyled</code> class applies spacing for HTML elements.
						</p>
						<p>
							For block-level elements, this will usually be some <code>margin</code> applied under the element. Some
							elements however, might have sensible defaults.
						</p>
						<p>
							So if you want to put a bunch of components on a page, and have them space themselves sensibly without
							applying a lot of extra positioning styles, the <code>spacing</code> prop will help you with that.
						</p>

						<h2>
							<code>Block</code>
						</h2>
						<p>
							To avoid local stylesheets full of classes only for positioning adjustments, you can inline such
							posititioning in the template. The <code>Block</code> component makes this a bit cleaner, by allowing you
							to write the styles directly as props.
						</p>
						<p>
							<strong>NB:</strong> Inline styling might be a bit controversial, but there are several advantages to such
							an apprach:
						</p>

						<ul>
							<li>
								No need to keep looking back and forth between TSX and SCSS files when reading or modifying templates.
							</li>
							<li>
								CSS in JS allows you important flexibility that is impossible with a traditional stylesheet, such as
								dynamic breakpoints.
							</li>
							<li>Static typing of the styles.</li>
							<li>The strict locality of the style rules allows you to refactor code with much greater confidence.</li>
						</ul>
						<p>
							Inlining our styles is not an anti-pattern; it is readable, decoupled, performant, and it does not
							validate strict Content Security Policy (since the styles are compiled into the JS, not parsed from a
							string)
						</p>
						<p>
							Of course, one might want to not go overboard with inline styling - the <code>Block</code> component is
							primarily meant for layout and positioning, not for general styling. Ideally, we'd want as much styles to
							come from the UI library's components anyway.
						</p>

						<h3>
							Example: Row layout with <code>Block</code>
						</h3>

						<Block display="flex" flexWrap="wrap" flexDirection={isSmallScreen ? 'column' : 'row'} margin="-16px">
							<Block flex="2" margin="16px">
								<Alert variant="success">flex: 2</Alert>
							</Block>
							<Block flex="3" margin="16px">
								<Alert variant="success">flex: 3</Alert>
							</Block>
							<Block flex="4" margin="16px">
								<Alert variant="success">flex: 4</Alert>
							</Block>
						</Block>

						<h3>
							Example: Grid layout with <code>Block</code>
						</h3>

						<p>
							Here's an example of the block component used to create a grid layout. The children use percent-values for
							the <code>flex</code> attribute, so it wraps to several lines.
						</p>

						<Block display="flex" flexWrap="wrap" flexDirection={isSmallScreen ? 'column' : 'row'} margin="-16px">
							<Block flex="33.333%" padding="16px">
								<Alert>Hello</Alert>
							</Block>
							<Block flex="33.333%" padding="16px">
								<Alert>Hello</Alert>
							</Block>
							<Block flex="33.333%" padding="16px">
								<Alert>Hello</Alert>
							</Block>
							<Block flex="50%" padding="16px">
								<Alert>Hello</Alert>
							</Block>
							<Block flex="50%" padding="16px">
								<Alert>Is it me you're looking for? 👨🏾</Alert>
							</Block>
						</Block>

						<h2>
							<code>FlexRow</code>
						</h2>
						<p>
							Since making simple flex grids is a very common task, there's a <code>FlexRow</code> component that
							implements the grid/row pattern above, with gutters set according to the design system.
						</p>

						<FlexRow breakIf={screenWidth < 900}>
							<Block flex="70%">
								<Alert variant="warning">Ahoy</Alert>
							</Block>
							<Block flex="30%">
								<Alert variant="warning">Ahoy</Alert>
							</Block>
							<Block flex="50%">
								<Alert variant="warning">Ahoy</Alert>
							</Block>
							<Block flex="50%">
								<Alert variant="warning">Ahoy</Alert>
							</Block>
						</FlexRow>
					</div>
				</Panel>
			</Container>
		</>
	);
};
