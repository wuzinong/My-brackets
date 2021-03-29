// This is based on a copy of the one in WEB-JS-Internal
// It was easier than backporting the changes

import axios from 'axios';
import omit from 'lodash/omit';
import React from 'react';
import { innerSVG } from './innerSVG';
import { ISvgProps } from './Svg.types';

interface IInTransitCache {
	[key: string]: Promise<any>;
}

const getLocation = function (href) {
	const l = document.createElement('a');
	l.href = href;
	return l;
};

// Contains promises for every in flight requested svg. This ensures the icon request is only sent once.
const inTransitCache: IInTransitCache = {};
const remove = (src: string) => {
	delete inTransitCache[src];
};
const getOrFetch = <T extends any>(src: string, fetchPromiseFunc: () => Promise<T>): Promise<T> => {
	const inTransitPromise = inTransitCache[src];
	if (inTransitPromise) {
		return inTransitPromise;
	}
	inTransitCache[src] = fetchPromiseFunc().then(
		(data: T) => {
			remove(src);
			return data;
		},
		(err: Error) => {
			remove(src);
			throw err;
		},
	);
	return inTransitCache[src];
};

/**
 * Fetches an svg image as an html string.
 * @param url The url of the svg to fetch
 * @param cancelToken An optional cancel token (see axios cancel)
 */
const fetchSvg = async (url: string, cancelToken?: any): Promise<Element> => {
	const svgResponse = await axios.get(url, { timeout: 60000, cancelToken });
	const container = document.createElement('div');
	container.innerHTML = svgResponse.data;
	const svgEl = container.firstElementChild as Element;
	const elements = Array.from(container.querySelectorAll('title'));
	elements.forEach((element: Element) => {
		element.parentNode.removeChild(element);
	});
	if (svgEl.nodeName.toLowerCase() !== 'svg') {
		throw new Error(`Response image from ${url} was not an svg string.`);
	}
	return svgEl;
};

export interface ISvgState {
	loading: boolean;
	failed: boolean;
	loadTimeout?: NodeJS.Timer;
	svgEl?: Element | undefined;
}

export class Svg extends React.PureComponent<ISvgProps, ISvgState> {
	public get svgSafeProps(): any {
		const safeProps: any = omit(this.props, ['src', 'alt', 'replace', 'onReplaceSuccess', 'onReplaceFail', 'forceSvg']);
		safeProps.role = 'img';
		safeProps['data-src'] = this.props.src;
		if (!safeProps['aria-label']) {
			safeProps['aria-label'] = this.props.alt;
		}
		if (this.props.className) {
			safeProps.className = this.props.className;
		}

		return safeProps;
	}
	public get imgSafeProps(): any {
		const safeProps: any = omit(this.props, ['replace', 'onReplaceSuccess', 'onReplaceFail']);
		if (this.state.failed) {
			safeProps['data-failed'] = true;
		}
		if (this.props.className) {
			safeProps.className = this.props.className;
		}
		return safeProps;
	}
	public get svgElAttributes(): { [key: string]: string } {
		const { svgEl } = this.state;
		const result: { [key: string]: string } = {};
		if (svgEl) {
			const { attributes } = svgEl;
			// tslint:disable:prefer-for-of
			for (let i = 0; i < attributes.length; i++) {
				const attrib = attributes[i];
				if (attrib.name.indexOf('xml') >= 0) {
					continue;
				}
				if (attrib.name.indexOf('style') >= 0) {
					continue;
				}
				result[attrib.name] = attrib.value;
			}
		}

		return result;
	}
	public get isSvg() {
		if (this.props.forceSvg) return true;
		const parsed = getLocation(this.props.src?.toLocaleLowerCase());
		return parsed.pathname.endsWith('.svg');
	}
	public static defaultProps = {
		replace: true,
	};

	public state: ISvgState = {
		loading: false,
		failed: false,
	};

	private mounted = false;

	public async loadSvg(svgSrc: string): Promise<Element | null> {
		this.setState({
			loading: true,
			failed: false,
		});

		try {
			const svgEl = await getOrFetch(svgSrc, () => fetchSvg(svgSrc));
			if (!this.mounted) return;
			this.setState({
				loading: false,
				failed: false,
				svgEl,
			});
			return svgEl;
		} catch (error) {
			if (!this.mounted) return;
			this.setState({
				loading: false,
				failed: true,
			});
		}
	}
	public componentDidUpdate(prevProps: ISvgProps) {
		if (!this.props.replace) {
			return;
		}

		if (this.props.src !== prevProps.src) {
			if (this.isSvg) {
				this.loadSvg(this.props.src);
			}
		}
	}
	public componentDidMount() {
		this.mounted = true;
		if (this.props.replace && this.isSvg) {
			this.loadSvg(this.props.src);
		}
	}
	public componentWillUnmount() {
		this.mounted = false;
	}

	public render() {
		if (this.state.loading) {
			return null; // Do not render anything while loading
		}

		if (this.state.failed || !this.props.replace || !this.isSvg) {
			return this.renderImg();
		}

		return this.renderSvg();
	}

	protected renderSvg(): JSX.Element | null {
		const { svgEl } = this.state;
		const allProps = {
			...this.svgElAttributes,
			...this.svgSafeProps,
		};
		if (!svgEl) {
			return null;
		}
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				{...allProps}
				dangerouslySetInnerHTML={{ __html: innerSVG(svgEl as SVGElement) }}
			/>
		);
	}
	protected renderImg(): JSX.Element {
		return <img {...this.imgSafeProps} />;
	}
}
export default Svg;
