import React from 'react';
import './Banner.scss';
import { IBannerProps } from './Banner.types';

class Banner extends React.PureComponent<IBannerProps> {
    constructor(props: IBannerProps) {
        super(props);
    }

    render() {
        const { imageUrl, header, text, providerName, providerLogoUrl } = this.props;
        return (
            <section className="banner-wrapper" style={{ backgroundImage: `url(${imageUrl})` }}>
                <div className="flex-container">
                    <div className="left-of"></div>
                    <div className="banner">
                        <div className="spacer"></div>
                        <div className="gradient">
                            <div style={{padding: '16px 0'}}>
                                <h1>{header}</h1>
                                <h2>{text}</h2>
                            </div>
                            <div className="provider-logo">
                                <img src={providerLogoUrl} alt={providerLogoUrl} title={providerName} width="96" />
                            </div>
                        </div>
                    </div>
                    <div className="right-of"></div>
                </div>
            </section>
        );
    }
}

export default Banner;