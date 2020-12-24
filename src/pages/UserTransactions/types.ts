export type DispatchProps = {
    getMembers(): void;
    getTransactions(userId: number): void;
};

export type StateProps = {
    isLoading: boolean;
    members: object[];
    transactions: object[];
};

export type Props = { ...DispatchProps, ...StateProps };
