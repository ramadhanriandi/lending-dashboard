export type DispatchProps = {
    getMembers(): void;
    postTransaction(transaction: object): void;
};

export type StateProps = {
    isLoading: boolean;
    members: object[];
};

export type Props = { ...DispatchProps, ...StateProps };
