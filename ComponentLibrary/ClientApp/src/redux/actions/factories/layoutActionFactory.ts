import * as LayoutActions from '../layout';
import { ILayout } from 'types';

export default class LayoutActionFactory {
    static initHeader(payload: ILayout): LayoutActions.IInitializeHeader {
        return {
            type: LayoutActions.initializeHeader,
            payload
        };
    }

    static fetchNotifications(): LayoutActions.IFetchNotifications {
        return {
            type: LayoutActions.fetchNotifications
        };
    }

    static error(payload: object) {
        return {
            type: LayoutActions.error,
            payload
        };
    }

    static fetchUser(): LayoutActions.IFetchUser {
        return {
            type: LayoutActions.fetchUser
        };
    }

    static userFetchSucceed(payload: ILayout): LayoutActions.IFetchUserSuccess {
        return {
            type: LayoutActions.fetchUserSuccess,
            payload
        };
    }

    static notificationFetchSucceed(payload: { notifications: number }): LayoutActions.IFetchNotificationSuccess {
        return {
            type: LayoutActions.fetchNotificationsSuccess,
            payload
        }
    }
}