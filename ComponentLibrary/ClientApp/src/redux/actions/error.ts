import { IAction } from '../../types/action';

export const error = 'ERROR';
export type Error = typeof error;

export interface IError extends IAction {
    type: Error;
    payload?: any;
    error: any;
    data?: any;
}