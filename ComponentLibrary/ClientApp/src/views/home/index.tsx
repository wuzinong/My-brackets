import Home from './Home';
import { connect, Dispatch } from 'react-redux';
import { StoreState } from '../../types/index';
import { IHomeProps } from './Home.types';
import HomeActionFactory from '../../redux/actions/factories/HomeActionFactory';

export function mapStateToProps(state: StoreState): IHomeProps {
    return {
        products: state.products
    } as IHomeProps;
}

export const mapDispatchToProps = {
    fetchProducts: HomeActionFactory.fetchProducts
}

export function mergeProps(stateProps: Object, dispatchProps: Object, ownProps: Object) {
    return { ...ownProps, ...stateProps, ...dispatchProps };
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Home);