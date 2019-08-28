import { IAction } from '../../types/action';

export const show = 'SHOW_SPINNER';
export type Show = typeof show;

export interface IShowSpinner extends IAction {
    type: Show;
}

export const hide = 'HIDE_SPINNER';
export type Hide = typeof hide;

export interface IHideSpinner extends IAction {
    type: Hide;
}