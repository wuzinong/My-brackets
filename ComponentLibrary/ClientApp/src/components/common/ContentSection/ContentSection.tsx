import React from 'react';
import './ContentSection.scss';
import { IContentSectionProps } from './ContentSection.types';

class ContentSection extends React.PureComponent<IContentSectionProps> {
    constructor(props: IContentSectionProps) {
        super(props);
    }

    render() {
        const { imageUrl, content } = this.props;
        return (
            <article className="content-wrapper">
                <div className="content-section" dangerouslySetInnerHTML={{ __html: content }}></div>
                <div className="picture-section"><img src={imageUrl} alt={imageUrl} /></div>
            </article>
        );
    }
}

export default ContentSection;