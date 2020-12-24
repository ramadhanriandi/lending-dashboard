import { all, put, takeLatest } from 'redux-saga/effects';

import { TransactionActionTypes } from './transaction';
import { UserActionTypes } from './user';

const POSTGRESQL_BASE_URL = 'http://localhost:8000/api/v1';
const MONGO_BASE_URL = 'http://localhost:8001/api/v1';

export function* postTransaction(payload: object): Generator {
    try {
        const json = yield fetch(`${POSTGRESQL_BASE_URL}/transactions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload.transaction)
        }).then(response => response.json());
        yield put({ type: TransactionActionTypes.ADD_TRANSACTION_SUCCESS, data: json.content });
    } catch (e) {
        yield put({ type: TransactionActionTypes.ADD_TRANSACTION_FAIL, message: e.message });
    }
}

export function* fetchTransactions(payload: object): Generator {
    try {
        const json = yield fetch(`${POSTGRESQL_BASE_URL}/transactions/search`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload.dateRange)
        }).then(response => response.json());
        yield put({ type: TransactionActionTypes.GET_TRANSACTIONS_SUCCESS, data: json.content });
    } catch (e) {
        yield put({ type: TransactionActionTypes.GET_TRANSACTIONS_FAIL, message: e.message });
    }
}

export function* fetchUserTransactions(payload: object): Generator {
    try {
        const json = yield fetch(`${MONGO_BASE_URL}/transactions?userId=${payload.userId}`).then(response => response.json());
        yield put({ type: TransactionActionTypes.GET_USER_TRANSACTIONS_SUCCESS, data: json.content });
    } catch (e) {
        yield put({ type: TransactionActionTypes.GET_USER_TRANSACTIONS_FAIL, message: e.message });
    }
}

export function* fetchUsers(): Generator {
    try {
        const json = yield fetch(`${POSTGRESQL_BASE_URL}/users`).then(response => response.json());
        yield put({ type: UserActionTypes.GET_USERS_SUCCESS, data: json.content });
    } catch (e) {
        yield put({ type: UserActionTypes.GET_USERS_FAIL, message: e.message });
    }
}

function* actionWatcher() {
    yield takeLatest(TransactionActionTypes.ADD_TRANSACTION, postTransaction);
    yield takeLatest(TransactionActionTypes.GET_TRANSACTIONS, fetchTransactions);
    yield takeLatest(TransactionActionTypes.GET_USER_TRANSACTIONS, fetchUserTransactions);
    yield takeLatest(UserActionTypes.GET_USERS, fetchUsers);
}

export function* rootSaga(): Generator {
    yield all([actionWatcher()]);
}
