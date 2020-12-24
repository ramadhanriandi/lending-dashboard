export type DispatchProps = {
    getMembers(): void;
};

export type StateProps = {
    isLoading: boolean;
    members: object[];
};

export type Props = { ...DispatchProps, ...StateProps };
