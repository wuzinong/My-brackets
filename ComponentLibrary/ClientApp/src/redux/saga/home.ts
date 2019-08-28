import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as HomeActions from '../actions/home';
import HomeActionFactory from '../actions/factories/HomeActionFactory';
import ApiUrlHelper from './ApiUrlHelper';

function* fetchProducts(action) {
    try {
        const productsResponse = yield call(axios.get, ApiUrlHelper.products);
        const productState = productsResponse.data;
        yield put(HomeActionFactory.fetchProductsSucceed(productState) as any);
    } catch (e) {
        console.error(e);
    }
}

export default function* watch() {
    yield takeEvery(HomeActions.fetchProducts, fetchProducts);
}