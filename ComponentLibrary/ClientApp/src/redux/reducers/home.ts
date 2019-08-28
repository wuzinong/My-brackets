import initState from '../store/initState';
import ActionReducer from './ActionReducer';
import { IAction } from '../../types/action';
import { IProduct } from 'types';
import * as HomeActions from '../actions/home';

const actions: { [key: string]: (state: IProduct[], action: IAction) => IProduct[] } = {
    [HomeActions.fetchProductsSuccess]: (state, action) => {
        const result = action as HomeActions.IFetchProductsSuccess;
        return [...result.payload];
    }
}

export function reduceHome(state: IProduct[] = initState.products, action: IAction): IProduct[] {
    return new ActionReducer(actions).reduce(state, action);
}