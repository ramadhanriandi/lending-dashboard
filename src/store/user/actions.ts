import { AddUserAction, RemoveUserAction, GetUsersAction, GetUsersSuccessAction, GetUsersFailAction, UserActionTypes } from './types';

export const addUser = (name: string, birthDate: date, address: string): AddUserAction => ({
    name,
    birthDate,
    address,
    type: UserActionTypes.ADD_USER
});

export const removeUser = (userId: number): RemoveUserAction => ({
    userId,
    type: UserActionTypes.REMOVE_USER
});

export const getUsers = (): GetUsersAction => ({
    type: UserActionTypes.GET_USERS
});

export const getUsersSuccess = (data: object[]): GetUsersSuccessAction => ({
    data,
    type: UserActionTypes.GET_USERS_SUCCESS
});

export const getUsersFail = (message: string): GetUsersFailAction => ({
    message,
    type: UserActionTypes.GET_USERS_FAIL
});
