import * as HomeActions from '../home';
import { IProduct } from 'types';

export default class HomeActionFactory {
    static fetchProducts(): HomeActions.IFetchProducts {
        return {
            type: HomeActions.fetchProducts
        };
    }

    static fetchProductsSucceed(payload: IProduct[]): HomeActions.IFetchProductsSuccess {
        return {
            type: HomeActions.fetchProductsSuccess,
            payload
        };
    }
}