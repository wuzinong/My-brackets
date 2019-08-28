import { IAction } from 'types/action';
import { IProduct } from 'types';

/* Products */
export const fetchProducts = 'HOME_FETCH_PRODUCTS';
export type FetchProducts = typeof fetchProducts;

export interface IFetchProducts extends IAction {
    type: FetchProducts;
}

export const fetchProductsSuccess = 'HOME_FETCH_PRODUCTS_SUCCESS';
export type FetchProductsSuccess = typeof fetchProductsSuccess;

export interface IFetchProductsSuccess extends IAction {
    type: FetchProductsSuccess,
    payload: IProduct[];
}

export const fetchProductsFailure = 'HOME_FETCH_PRODUCTS_FAILURE';
export type FetchProductsFailure = typeof fetchProductsFailure;

export interface IFetchProductsFailure extends IAction {
    type: FetchProductsFailure;
}