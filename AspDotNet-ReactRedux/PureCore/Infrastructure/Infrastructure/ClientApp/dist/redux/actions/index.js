import * as constants from '../constants';
export function incrementEnthusiasm() {
    return {
        type: constants.INCREMENT_ENTHUSIASM
    };
}
export function decrementEnthusiasm() {
    return {
        type: constants.DECREMENT_ENTHUSIASM
    };
}
export function getList() {
    return {
        type: constants.GET_LIST
    };
}
export function filterList() {
    return {
        type: constants.Filter_LIST
    };
}
export function initList(listData) {
    return {
        type: constants.INIT_LIST,
        listData: listData
    };
}
//# sourceMappingURL=index.js.map