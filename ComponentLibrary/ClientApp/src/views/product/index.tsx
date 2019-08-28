import Product from './Product';
import { connect, Dispatch } from 'react-redux';
import { StoreState } from '../../types/index';
import { IProductProps } from './Product.types';
import ProductActionFactory from '../../redux/actions/factories/ProductActionFactory';

export function mapStateToProps(state: StoreState): IProductProps {
    return {
        product: state.product
    } as IProductProps;
}

export const mapDispatchToProps = {
    fetchProduct: ProductActionFactory.fetchProduct
}

export function mergeProps(stateProps: Object, dispatchProps: Object, ownProps: Object) {
    return { ...ownProps, ...stateProps, ...dispatchProps };
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Product);