import { Action } from 'redux';

export enum UserActionTypes {
    ADD_USER = '@@user/ADD_USER',

    REMOVE_USER = '@@user/REMOVE_USER',

    GET_USERS = '@@user/GET_USERS',
    GET_USERS_SUCCESS = '@@user/GET_USERS_SUCCESS',
    GET_USERS_FAIL = '@@user/GET_USERS_FAIL'
}

export interface UserState {
    data: object[];
}

export interface AddUserAction extends Action {
    name: string;
    birthDate: date;
    address: string;
    type: typeof UserActionTypes.ADD_USER;
}

export interface RemoveUserAction extends Action {
    userId: number;
    type: typeof UserActionTypes.REMOVE_USER;
}

export interface GetUsersAction extends Action {
    type: typeof UserActionTypes.GET_USERS;
}

export interface GetUsersSuccessAction extends Action {
    data: object[];
    type: typeof UserActionTypes.GET_USERS_SUCCESS;
}

export interface GetUsersFailAction extends Action {
    message: string;
    type: typeof UserActionTypes.GET_USERS_FAIL;
}

export type UserActions = AddUserAction | RemoveUserAction | GetUsersAction | GetUsersSuccessAction | GetUsersFailAction;
