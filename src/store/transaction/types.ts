import { Action } from 'redux';

export enum TransactionActionTypes {
    ADD_TRANSACTION = '@@user/ADD_TRANSACTION',
    ADD_TRANSACTION_SUCCESS = '@@user/ADD_TRANSACTION_SUCCESS',
    ADD_TRANSACTION_FAIL = '@@user/ADD_TRANSACTION_FAIL',

    GET_TRANSACTIONS = '@@user/GET_TRANSACTIONS',
    GET_TRANSACTIONS_SUCCESS = '@@user/GET_TRANSACTIONS_SUCCESS',
    GET_TRANSACTIONS_FAIL = '@@user/GET_TRANSACTIONS_FAIL',

    GET_USER_TRANSACTIONS = '@@user/GET_USER_TRANSACTIONS',
    GET_USER_TRANSACTIONS_SUCCESS = '@@user/GET_USER_TRANSACTIONS_SUCCESS',
    GET_USER_TRANSACTIONS_FAIL = '@@user/GET_USER_TRANSACTIONS_FAIL'
}

export interface TransactionState {
    transactions: object[];
    userTransactions: object[];
}

export interface AddTransactionAction extends Action {
    transaction: object;
    type: typeof TransactionActionTypes.ADD_TRANSACTION;
}

export interface AddTransactionSuccessAction extends Action {
    data: object;
    type: typeof TransactionActionTypes.ADD_TRANSACTION_SUCCESS;
}

export interface AddTransactionFailAction extends Action {
    message: string;
    type: typeof TransactionActionTypes.ADD_TRANSACTION_FAIL;
}

export interface GetTransactionsAction extends Action {
    dateRange: object;
    type: typeof TransactionActionTypes.GET_TRANSACTIONS;
}

export interface GetTransactionsSuccessAction extends Action {
    data: object[];
    type: typeof TransactionActionTypes.GET_TRANSACTIONS_SUCCESS;
}

export interface GetTransactionsFailAction extends Action {
    message: string;
    type: typeof TransactionActionTypes.GET_TRANSACTIONS_FAIL;
}

export interface GetUserTransactionsAction extends Action {
    userId: number;
    type: typeof TransactionActionTypes.GET_USER_TRANSACTIONS;
}

export interface GetUserTransactionsSuccessAction extends Action {
    data: object[];
    type: typeof TransactionActionTypes.GET_USER_TRANSACTIONS_SUCCESS;
}

export interface GetUserTransactionsFailAction extends Action {
    message: string;
    type: typeof TransactionActionTypes.GET_USER_TRANSACTIONS_FAIL;
}

export type UserActions =
    | AddUserAction
    | GetTransactionsAction
    | GetTransactionsSuccessAction
    | GetTransactionsFailAction
    | GetUserTransactionsAction
    | GetUserTransactionsSuccessAction
    | GetUserTransactionsFailAction;
