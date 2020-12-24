import { connect } from 'react-redux';

import { AppState } from '@store';
import { getUserTransactions } from '@store/transaction';
import { getUsers } from '@store/user';

import { UserTransactions } from './UserTransactions';
import { DispatchProps, StateProps } from './types';

const mapStateToProps = ({ loading, user, transaction }: AppState): StateProps => ({
    isLoading: loading.userTransactions.isLoading,
    members: user.data,
    transactions: transaction.userTransactions
});

const mapDispatchToProps: DispatchProps = {
    getMembers: getUsers,
    getTransactions: getUserTransactions
};

export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(UserTransactions);
