export type DispatchProps = {
    getTransactions(dateRange: object): void;
};

export type StateProps = {
    isLoading: boolean;
    transactions: object[];
};

export type Props = { ...DispatchProps, ...StateProps };
