import { IAction } from 'types/action';
import { IProductDetails } from 'types';

export const fetchProduct = 'PRODUCT_FETCH_PRODUCT';
export type FetchProduct = typeof fetchProduct;

export interface IFetchProduct extends IAction {
    type: FetchProduct;
    slug: string;
}

export const fetchProductSuccess = 'PRODUCT_FETCH_PRODUCT_SUCCESS';
export type FetchProductSuccess = typeof fetchProductSuccess;

export interface IFetchProductSuccess extends IAction {
    type: FetchProductSuccess;
    payload: IProductDetails;
}

export const fetchProductFailure = 'PRODUCT_FETCH_PRODUCT_FAILURE';
export type FetchProductFailure = typeof fetchProductFailure;

export interface IFetchProductFailure extends IAction {
    type: FetchProductFailure;
}