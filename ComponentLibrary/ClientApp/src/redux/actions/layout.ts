import { IAction } from 'types/action';
import { ILayout } from 'types';

/* General */
export const error = 'LAYOUT_ERROR';
export type Error = typeof error;

export const initializeHeader = 'LAYOUT_INIT_HEADER';
export type InitializeHeader = typeof initializeHeader;

export interface IInitializeHeader extends IAction {
    type: InitializeHeader;
    payload: ILayout;
}

/* User */
export const fetchUser = 'LAYOUT_FETCH_USER';
export type FetchUser = typeof fetchUser;

export interface IFetchUser extends IAction {
    type: FetchUser;
}

export const fetchUserSuccess = 'LAYOUT_FETCH_USER_SUCCESS';
export type FetchUserSuccess = typeof fetchUserSuccess;

export interface IFetchUserSuccess extends IAction {
    type: FetchUserSuccess;
    payload: ILayout;
}

export const fetchUserFailure = 'LAYOUT_FETCH_USER_FAILURE';
export type FetchUserFailure = typeof fetchUserFailure;

export interface IFetchUserFailure extends IAction {
    type: FetchUserFailure;
}

/* Notifications */
export const fetchNotifications = 'LAYOUT_FETCH_NOTIFICATIONS';
export type FetchNotifications = typeof fetchNotifications;

export interface IFetchNotifications extends IAction {
    type: FetchNotifications;
}

export const fetchNotificationsSuccess = 'LAYOUT_FETCH_NOTIFICATIONS_SUCCESS';
export type FetchNotificationsSuccess = typeof fetchNotificationsSuccess;

export interface IFetchNotificationSuccess extends IAction {
    type: FetchNotificationsSuccess;
    payload: { notifications: number };
}

export const fetchNotificationsFailure = 'LAYOUT_FETCH_NOTIFICATIONS_FAILURE';
export type FetchNotificationsFailure = typeof fetchNotificationsFailure;

export interface IFetchNotificationsFailure extends IAction {
    type: FetchNotificationsFailure;
}