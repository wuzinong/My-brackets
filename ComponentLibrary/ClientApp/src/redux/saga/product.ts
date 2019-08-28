import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as ProductActions from '../actions/product';
import ProductActionFactory from '../actions/factories/ProductActionFactory';
import ApiUrlHelper from'./ApiUrlHelper';

function* fetchProduct(action) {
    try {
        const fetchProductAction = action as ProductActions.IFetchProduct;
        const productResponse = yield call(axios.get, ApiUrlHelper.product(fetchProductAction.slug));
        const productState = productResponse.data;
        yield put(ProductActionFactory.fetchProductSucceed(productState) as any);
    } catch (e) {
        console.error(e);
    }
}

export default function* watch() {
    yield takeEvery(ProductActions.fetchProduct, fetchProduct);
}