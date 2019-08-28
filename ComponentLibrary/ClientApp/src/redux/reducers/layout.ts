import initState from '../store/initState';
import ActionReducer from './ActionReducer';
import { IAction } from '../../types/action';
import { IError } from '../actions/Error';
import { ILayout } from 'types';
import * as LayoutActions from '../actions/layout';

const actions: { [key: string]: (state: ILayout, action: IAction) => ILayout } = {
    [LayoutActions.fetchUserSuccess]: (state, action) => {
        const layout = action as LayoutActions.IFetchUserSuccess;
        return { ...state, ...layout.payload, ...{ isBusy: false } };
    },
    [LayoutActions.fetchUserFailure]: (state, action) => {
        return { ...state }
    },
    [LayoutActions.fetchNotificationsSuccess]: (state, action) => {
        const layout = action as LayoutActions.IFetchNotificationSuccess;
        return { ...state, ...layout.payload };
    },
    [LayoutActions.fetchNotificationsFailure]: (state, action) => {
        return { ...state }
    },
    [LayoutActions.error]: (state, action) => {
        const error = action as IError;
        return { ...state, ...error.payload, ...{ isBusy: false } };
    }
};

export function reduceLayout(state: ILayout = initState.layout, action: IAction): ILayout {
    return new ActionReducer(actions).reduce(state, action);
}