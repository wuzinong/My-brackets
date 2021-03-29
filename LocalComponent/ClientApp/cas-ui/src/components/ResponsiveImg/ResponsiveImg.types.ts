export interface IResponsiveImgProps {
	imgArr: IImgArr[];
	defaultUrl: string;
	alt: string;
	title?: string;
	cName?: string;
	styles?: any;
	className?: string;
}

export interface IImgArr {
	imgUrl: string;
	imgQuery: string;
	mediaQuery: string;
	imgType?: string;
}
