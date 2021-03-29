import { Alert } from 'cas-ui/src/components/Alert/Alert';
import { Container } from 'cas-ui/src/components/Container/Container';
import {
	Col as GridCol,
	ColProps,
	Container as GridContainer,
	Row as GridRow,
	RowProps,
} from 'cas-ui/src/components/Grid/Grid';
import { Panel } from 'cas-ui/src/components/Panel/Panel';
import { useScreenWidth } from 'cas-ui/src/util/useScreenWidth';
import React from 'react';

// Special component with debug styles
const Col: React.FC<ColProps> = ({ children, ...props }) => {
	return (
		<GridCol
			paddingTop={12}
			paddingBottom={12}
			background="rgba(255, 0, 0, 0.2)"
			backgroundClip="content-box"
			{...props}
		>
			{children}
		</GridCol>
	);
};

// Special component with debug styles
const Row: React.FC<RowProps> = ({ children, ...props }) => {
	return (
		<GridRow borderBottom="1px solid rgba(255, 0, 0, 0.2)" {...props}>
			{children}
		</GridRow>
	);
};

export const GridDemo = () => {
	const screenWidth = useScreenWidth();
	const isMediumScreen = screenWidth < 992;
	const isSmallScreen = screenWidth < 768;

	return (
		<>
			<Container>
				<Panel>
					<div className="cas-autostyled">
						<h1>Grid</h1>
						<Alert variant="warning">
							New Grid system built on an updated grid from the designers at the end of 2020.
						</Alert>
						<p>
							This grid system is based on the flex display property. <code>12</code> columns, <code>24px</code> gutter
							and max-width of <code>1040px</code> by default. Note that this documentation website is using a larger
							container.
						</p>

						<h2>Fluid components</h2>
						<p>Percent based widths allow fluid resizing of columns.</p>
						<GridContainer>
							<Row>
								<Col span={12}>1 column</Col>
							</Row>
							<Row>
								<Col span={6}>2 columns</Col>
								<Col span={6}>2 columns</Col>
							</Row>
							<Row>
								<Col span={4}>3 columns</Col>
								<Col span={4}>3 columns</Col>
								<Col span={4}>3 columns</Col>
							</Row>
							<Row>
								<Col span={3}>4 columns</Col>
								<Col span={3}>4 columns</Col>
								<Col span={3}>4 columns</Col>
								<Col span={3}>4 columns</Col>
							</Row>
							<Row>
								<Col span={2}>6 columns</Col>
								<Col span={2}>6 columns</Col>
								<Col span={2}>6 columns</Col>
								<Col span={2}>6 columns</Col>
								<Col span={2}>6 columns</Col>
								<Col span={2}>6 columns</Col>
							</Row>
							<Row>
								<Col span={1}>12 columns</Col>
								<Col span={1}>12 columns</Col>
								<Col span={1}>12 columns</Col>
								<Col span={1}>12 columns</Col>
								<Col span={1}>12 columns</Col>
								<Col span={1}>12 columns</Col>
								<Col span={1}>12 columns</Col>
								<Col span={1}>12 columns</Col>
								<Col span={1}>12 columns</Col>
								<Col span={1}>12 columns</Col>
								<Col span={1}>12 columns</Col>
								<Col span={1}>12 columns</Col>
							</Row>
						</GridContainer>

						<h2>Offsets</h2>
						<p>Offset a column</p>
						<GridContainer>
							<Row>
								<Col span={4} offset={8}>
									4 columns on the right
								</Col>
							</Row>
							<Row>
								<Col span={10} offset={1}>
									10 columns "centered"
								</Col>
							</Row>
							<Row>
								<Col span={2} offset={2}>
									2 columns with offset
								</Col>
								<Col span={3} offset={4}>
									3 columnss with offset
								</Col>
							</Row>
						</GridContainer>

						<h2>Responsive</h2>
						<p>
							Breakpoints are <strong>NOT</strong> built in these components. If you want to change the layout based on
							the viewport width, you have to do it in your component for now. For exemple, by using{' '}
							<code>useScreenWidth()</code>.
						</p>
						<GridContainer>
							<Row>
								<Col span={isMediumScreen ? 12 : 6}>
									1 row for <code>&gt;992px</code>
								</Col>
								<Col span={isMediumScreen ? 12 : 6}>
									1 row for <code>&gt;992px</code>
								</Col>
							</Row>
							<Row>
								<Col span={isSmallScreen ? 12 : 4}>
									1 row for <code>&gt;768px</code>
								</Col>
								<Col span={isSmallScreen ? 12 : 4}>
									1 row for <code>&gt;768px</code>
								</Col>
								<Col span={isSmallScreen ? 12 : 4}>
									1 row for <code>&gt;768px</code>
								</Col>
							</Row>
						</GridContainer>

						<h2>Nested Grids</h2>
						<p>Neither tested nor implemented yet.</p>
					</div>
				</Panel>
			</Container>
		</>
	);
};
