import { Reducer } from 'redux';
import _ from 'lodash';

import { TransactionActions, TransactionActionTypes, TransactionState } from './types';

export const initialState: TransactionState = {
    transactions: [],
    userTransactions: []
};

export const transaction: Reducer<TransactionState, TransactionActions> = (state = initialState, { type, ...payload }) => {
    switch (type) {
        case TransactionActionTypes.ADD_TRANSACTION:
            return state;
        case TransactionActionTypes.ADD_TRANSACTION_SUCCESS:
            return state;
        case TransactionActionTypes.ADD_TRANSACTION_FAIL:
            return state;

        case TransactionActionTypes.GET_TRANSACTIONS:
            return state;
        case TransactionActionTypes.GET_TRANSACTIONS_SUCCESS:
            return {
                ...state,
                transactions: _.map(payload.data, data => {
                    const transactionDate = new Date(data.transactionDate);
                    const day = transactionDate.getDate();
                    const month = transactionDate.getMonth() + 1;
                    const year = transactionDate.getFullYear();

                    return { ...data, transactionDate: `${day}-${month}-${year}`, transactionType: _.capitalize(data.transactionType) };
                })
            };
        case TransactionActionTypes.GET_TRANSACTIONS_FAIL:
            return state;

        case TransactionActionTypes.GET_USER_TRANSACTIONS:
            return state;
        case TransactionActionTypes.GET_USER_TRANSACTIONS_SUCCESS:
            return {
                ...state,
                userTransactions: _.map(payload.data, data => {
                    const transactionDate = new Date(data.transactionDate);
                    const day = transactionDate.getDate();
                    const month = transactionDate.getMonth() + 1;
                    const year = transactionDate.getFullYear();

                    return { ...data, transactionDate: `${day}-${month}-${year}`, transactionType: _.capitalize(data.transactionType) };
                })
            };
        case TransactionActionTypes.GET_USER_TRANSACTIONS_FAIL:
            return state;
        default:
            return state;
    }
};
