import { Layout } from './Layout';
import { connect } from 'react-redux';
import { StoreState } from 'types';
import { ILayoutProps } from './Layout.types';
import LayoutActionFactory from '../../redux/actions/factories/LayoutActionFactory';

export function mapStateToProps(storeState: StoreState): ILayoutProps {
    return {
        isBusy: false,
        user: {
            firstName: storeState.layout.firstName,
            lastName: storeState.layout.lastName,
            urls: storeState.layout.urls,
            notifications: storeState.layout.notifications
        }
    };
}

export const mapDispatchToProps = {
    fetchUser: LayoutActionFactory.fetchUser,
    fetchNotifications: LayoutActionFactory.fetchNotifications
}

export function mergeProps(stateProps: Object, dispatchProps: Object, ownProps: Object) {
    return { ...ownProps, ...stateProps, ...dispatchProps };
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps, { pure: false })(Layout);