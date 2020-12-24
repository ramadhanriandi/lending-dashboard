import {
    AddTransactionAction,
    AddTransactionSuccessAction,
    AddTransactionFailAction,
    GetTransactionsAction,
    GetTransactionsSuccessAction,
    GetTransactionsFailAction,
    GetUserTransactionsAction,
    GetUserTransactionsSuccessAction,
    GetUserTransactionsFailAction,
    TransactionActionTypes
} from './types';

export const addTransaction = (transaction: object): AddTransactionAction => ({
    transaction,
    type: TransactionActionTypes.ADD_TRANSACTION
});

export const addTransactionSuccess = (data: object): AddTransactionSuccessAction => ({
    data,
    type: TransactionActionTypes.ADD_TRANSACTION_SUCCESS
});

export const addTransactionFail = (message: string): AddTransactionFailAction => ({
    message,
    type: TransactionActionTypes.ADD_TRANSACTION_FAIL
});

export const getTransactions = (dateRange: object): GetTransactionsAction => ({
    dateRange,
    type: TransactionActionTypes.GET_TRANSACTIONS
});

export const getTransactionsSuccess = (data: object[]): GetTransactionsSuccessAction => ({
    data,
    type: TransactionActionTypes.GET_TRANSACTIONS_SUCCESS
});

export const getTransactionsFail = (message: string): GetTransactionsFailAction => ({
    message,
    type: TransactionActionTypes.GET_TRANSACTIONS_FAIL
});

export const getUserTransactions = (userId: number): GetUserTransactionsAction => ({
    userId,
    type: TransactionActionTypes.GET_USER_TRANSACTIONS
});

export const getUserTransactionsSuccess = (data: object[]): GetUserTransactionsSuccessAction => ({
    data,
    type: TransactionActionTypes.GET_USER_TRANSACTIONS_SUCCESS
});

export const getUserTransactionsFail = (message: string): GetUserTransactionsFailAction => ({
    message,
    type: TransactionActionTypes.GET_USER_TRANSACTIONS_FAIL
});
