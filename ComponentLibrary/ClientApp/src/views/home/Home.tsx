import * as React from 'react';
import './Home.scss';
import Layout from '../layout';
import { IHomeProps, IHomeState } from './Home.types';
import { IProduct } from 'types';
import UrlHelper from '../../router/UrlHelper';
import { SearchBox, Banner } from 'Common';

class Home extends React.Component<IHomeProps, IHomeState> {
    constructor(props: IHomeProps) {
        super(props);
    }

    componentDidMount(): void {
        this.props.fetchProducts();
    }


    renderProductCard = (product: IProduct, index: number) => {
        return (
            <li>
                <a href={UrlHelper.product(product.urlSlug)}>
                    <div className="image-wrapper">
                        <img src={product.card.imageUrl} />
                        <div className="category">{product.card.category}</div>
                    </div>
                    <div className="text-wrapper">
                        <h4>{product.card.name}</h4>
                        <div>{product.card.description}</div>
                        <div>
                            <img src={product.provider.logoUrl} alt={product.provider.logoUrl} className="provider-logo" />
                        </div>
                    </div>
                </a>
            </li>
        );
    }

    renderProducts = (products: IProduct[]) => {
        if (products) {
            return (
                <ol className="cards">
                    {products.map(this.renderProductCard)}
                </ol>
            );
        }
        return null;
    }

    render() {
        if (this.props.products.length === 0) {
            return (
                <Layout>
                    <main>
                        <div>Loading...</div>
                    </main>
                </Layout>
            );
        }
        return (
            <Layout>
                <main>
                    <section className="constrain-width reverse">
                        <SearchBox />
                    </section>
                    <section className="constrain-width">
                        {/*<Banner />*/}
                        {this.renderProducts(this.props.products)}
                    </section>
                </main>
            </Layout>
        );
    }
}
export default Home;