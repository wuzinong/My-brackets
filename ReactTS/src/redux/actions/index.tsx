import * as constants from '../constants';

export interface IncrementEnthusiasm {
    type: constants.INCREMENT_ENTHUSIASM;
}
  
export interface DecrementEnthusiasm {
    type: constants.DECREMENT_ENTHUSIASM;
}
export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

export function incrementEnthusiasm():IncrementEnthusiasm{
    return {
        type:constants.INCREMENT_ENTHUSIASM
    }
}

export function decrementEnthusiasm():DecrementEnthusiasm{
    return {
        type:constants.DECREMENT_ENTHUSIASM
    }
}


//List
export interface GET_LIST{
    type:constants.GET_LIST
}
export function getList():GET_LIST{
    return {
        type:constants.GET_LIST
    }
}

export interface Filter_LIST{
    type:constants.Filter_LIST
}
export function filterList():Filter_LIST{
    return {
        type:constants.Filter_LIST
    }
}
export type ListAction = GET_LIST | Filter_LIST;