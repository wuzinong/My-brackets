import React from 'react';
import { IImgArr, IResponsiveImgProps } from './ResponsiveImg.types';

const ResponsiveImg = (props: IResponsiveImgProps) => {
	return (
		<>
			<picture className={props.className || null}>
				{props.imgArr.map((item: IImgArr, index: number) => {
					/*
						Put & or ? depending on whether URL already contains query params.
						This is a quick-fix, preferably we should refactor this.
					*/
					item.imgUrl = item.imgUrl || '';
					let finalUrl = item.imgUrl;
					if (item.imgUrl.includes('?')) finalUrl += '&' + item.imgQuery.slice(1);
					else finalUrl += item.imgQuery;

					return <source type={item.imgType} srcSet={finalUrl} media={item.mediaQuery} key={index} />;
				})}
				<img loading="lazy" alt={props.alt} title={props.title} src={props.defaultUrl} className={props.cName} style={props.styles} />
			</picture>
		</>
	);
};

export default ResponsiveImg;
