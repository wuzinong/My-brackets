import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as LayoutActions from '../actions/layout';
import LayoutActionFactory from '../actions/factories/LayoutActionFactory';
import { notification } from 'libs/Notification';
import ApiUrlHelper from './ApiUrlHelper';

function* fetchUser(action) {
    try {
        const myUserResponse = yield call(axios.get, ApiUrlHelper.myUser);
        const myServicesResponse = yield call(axios.get, ApiUrlHelper.myServices);

        let layoutState = {
            email: myUserResponse.data.email,
            firstName: myUserResponse.data.firstName,
            lastName: myUserResponse.data.lastName,
            company: myUserResponse.data.company,
            urls: {
                settings: '/settings/overview',
                notifications: '/notifications',
                logout: '/sign-out'
            },
            services: myServicesResponse.data
        };

        let returnAction = null;
        if (myUserResponse.status === 200) {
            returnAction = LayoutActionFactory.userFetchSucceed({ ...layoutState, ...{ isBusy: false } } as any);
        }
        yield put(returnAction);
    } catch (e) {
        if (e.response.status === 401) {
            window.location.href = this.urls.authenticate(window.location);
            return;
        } else {
            notification.error('An error occurred.');
        }
        //comment here
        let layoutState = {
            email: 'test@d.com',
            firstName: 'no data',
            lastName: 'H',
            company: 'testCompany',
            urls: {
                settings: '/my-profile',
                notifications: '',
                logout: ''
            }
        };
        notification.error('Header init failed now using testing data:');
        let returnAction = LayoutActionFactory.error({ ...layoutState, ...{ isBusy: false } }) as any;
        yield put(returnAction);
    }
}

function* fetchNotifications() {
    try {
        const response = yield call(axios.get, ApiUrlHelper.notificationCount);
        yield put(LayoutActionFactory.notificationFetchSucceed({ notifications: response.data.notifications }) as any);
    } catch (error) {
        yield put(LayoutActionFactory.notificationFetchSucceed({ notifications: Math.ceil(Math.random() * 10) }) as any);
    }
}

export default function* watch() {
    yield takeEvery(LayoutActions.fetchUser, fetchUser);
    yield takeEvery(LayoutActions.fetchNotifications, fetchNotifications);
}