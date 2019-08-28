import initState from '../store/initState';
import ActionReducer from './ActionReducer';
import { IAction } from '../../types/action';
import { IProductDetails } from 'types';
import * as ProductActions from '../actions/product';

const actions: { [key: string]: (state: IProductDetails, action: IAction) => IProductDetails } = {
    [ProductActions.fetchProductSuccess]: (state, action) => {
        const result = action as ProductActions.IFetchProductSuccess;
        return { ...result.payload };
    }
}

export function reduceProduct(state: IProductDetails = initState.product, action: IAction): IProductDetails {
    return new ActionReducer(actions).reduce(state, action);
}