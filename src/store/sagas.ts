import { all, put, takeLatest } from 'redux-saga/effects';

import { UserActionTypes } from './user';

const BASE_URL = 'http://localhost:8000/api/v1';

export function* fetchUsers(): Generator {
    try {
        const json = yield fetch(BASE_URL + '/users').then(response => response.json());
        yield put({ type: UserActionTypes.GET_USERS_SUCCESS, data: json.content });
    } catch (e) {
        yield put({ type: UserActionTypes.GET_USERS_FAIL, message: e.message });
    }
}

function* actionWatcher() {
    yield takeLatest(UserActionTypes.GET_USERS, fetchUsers);
}

export function* rootSaga(): Generator {
    yield all([actionWatcher()]);
}
