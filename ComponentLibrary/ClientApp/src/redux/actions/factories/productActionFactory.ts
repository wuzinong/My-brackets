import * as ProductActions from '../product';
import { IProductDetails } from 'types';

export default class HomeActionFactory {
    static fetchProduct(slug: string): ProductActions.IFetchProduct {
        return {
            type: ProductActions.fetchProduct,
            slug
        };
    }

    static fetchProductSucceed(payload: IProductDetails): ProductActions.IFetchProductSuccess {
        return {
            type: ProductActions.fetchProductSuccess,
            payload
        };
    }
}