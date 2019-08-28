import { all } from 'redux-saga/effects';
import layoutSaga from './layout';
import homeSaga from './home';
import productSaga from './product';

export default function* rootSaga() {
    yield all([
        layoutSaga(),
        homeSaga(),
        productSaga()
    ]);
}