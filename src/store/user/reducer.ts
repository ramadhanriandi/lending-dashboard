import { Reducer } from 'redux';
import _ from 'lodash';

import { UserActions, UserActionTypes, UserState } from './types';

export const initialState: UserState = {
    data: []
};

export const user: Reducer<UserState, UserActions> = (state = initialState, { type, ...payload }) => {
    switch (type) {
        case UserActionTypes.ADD_USER:
            return {
                data: _.concat(state.data, payload)
            };
        case UserActionTypes.REMOVE_USER:
            return {
                data: _.filter(state.data, function (data) {
                    return data.userId !== payload.userId;
                })
            };
        case UserActionTypes.GET_USERS:
            return state;
        case UserActionTypes.GET_USERS_SUCCESS:
            return {
                data: _.map(payload.data, data => {
                    const birthDate = new Date(data.birthDate);
                    const day = birthDate.getDate();
                    const month = birthDate.getMonth() + 1;
                    const year = birthDate.getFullYear();

                    return { ...data, birthDate: `${day}-${month}-${year}` };
                })
            };
        case UserActionTypes.GET_USERS_FAIL:
            return state;
        default:
            return state;
    }
};
