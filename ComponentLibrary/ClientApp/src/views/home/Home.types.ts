import { IProduct } from 'types';

export interface IHomeProps {
    fetchProducts: () => void;
    products: IProduct[];
}

export interface IHomeState {
}