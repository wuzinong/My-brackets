import * as React from 'react';
import './Product.scss';
import { withRouter } from 'react-router-dom';
import Layout from '../layout';
import { SearchBox, Banner, ContentSection } from 'Common';

import { IProductProps, IProductState } from './Product.types';
import { IProductDetails, IProductDetailsFeature, IProductDetailsSection, IProductDetailsTestimonial, IProductDetailsAdditionalInfoLink } from 'types';

class Product extends React.Component<IProductProps, IProductState> {
    private readonly internalName: string;

    constructor(props) {
        super(props);
        this.internalName = props.match.params.slug;
    }

    componentDidMount(): void {
        this.props.fetchProduct(this.internalName);
    }

    renderBanner(product: IProductDetails) {
        return <Banner imageUrl={product.banner.imageUrl} header={product.name} text={product.banner.text} providerName={product.provider.name} providerLogoUrl={product.provider.logoUrl} />;
    }

    renderFeature(feature: IProductDetailsFeature) {
        return (
            <div className="feature">
                <div className="description">{feature.description}</div>
            </div>
        );
    }

    renderShareBar() {
        return (
            <div className="share">
                <span>Share</span>

                <span className="learn-more">
                    <a href="">Learn more</a>
                </span>
                <div className="shadow"></div>
            </div>
        );
    }

    renderSection(section: IProductDetailsSection, index: number) {
        return <ContentSection key={index} imageUrl={section.imageUrl} content={section.content} />;
    }

    renderTestimonial(testimonial: IProductDetailsTestimonial, index: number) {
        return (
            <div className="testimonial">
                <div className="avatar">
                    <img src={testimonial.authorImageUrl} />
                </div>
                <div className="content">
                    <q>{testimonial.content}</q>
                    <div className="author">{testimonial.author}</div>
                </div>
            </div>
        );
    }

    renderAdditionalInfoLink(addInfoLink: IProductDetailsAdditionalInfoLink, index: number) {
        return (
            <li key={index}>
                <div className="content">
                    <a href={addInfoLink.url}>{addInfoLink.title}</a>
                    <div>{addInfoLink.description}</div>
                </div>
            </li>
        );
    }

    render() {
        const { product } = this.props;
        if (!this.props.product) {
            return (
                <Layout>
                    <main style={{ height: '100%' }}>
                        <div>Loading...</div>
                    </main>
                </Layout>
            );
        }
        return (
            <Layout>
                <main style={{ height: 'initial', marginBottom: '32px' }}>
                    <section className="constrain-width reverse">
                        <SearchBox />
                    </section>
                    {this.renderBanner(product)}
                    <section className="constrain-width">
                        <div>
                            <ul className="features">
                                <li>{this.renderFeature(product.features[0])}</li>
                                <li>{this.renderFeature(product.features[1])}</li>
                                <li>{this.renderFeature(product.features[2])}</li>
                                <li></li>
                            </ul>
                        </div>
                    </section>
                    <section className="constrain-width">
                        {this.renderShareBar()}
                    </section>
                    {product.sections &&
                        <section className="constrain-width">
                            {product.sections.map(this.renderSection)}
                        </section>
                    }
                    {product.testimonials &&
                        <section className="constrain-width">
                            {product.testimonials.map(this.renderTestimonial)}
                        </section>
                    }
                    {product.provider &&
                        <section className="constrain-width row-2">
                            <div className="provider">
                                <div className="provider-logo">
                                    <img src={product.provider.logoUrl} alt={product.provider.logoUrl} title={product.provider.name} width="96" />
                                </div>
                                <div className="content">
                                    <p>
                                        {product.provider.description}
                                    </p>
                                </div>
                            </div>
                            <div>
                                {product.additionalInfo &&
                                    <div className="additional-info">
                                        <h3>Learn more &hellip;</h3>
                                        <ul>
                                            {product.additionalInfo.map(this.renderAdditionalInfoLink)}
                                        </ul>
                                    </div>
                                }
                            </div>
                        </section>
                    }
                </main>
            </Layout>
        );
    }
}

export default withRouter(Product as any);