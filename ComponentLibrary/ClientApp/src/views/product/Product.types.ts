import { IProductDetails } from 'types';

export interface IProductProps {
    fetchProduct: (slug: string) => void;
    product: IProductDetails;
    internalName: string;
}

export interface IProductState {
}