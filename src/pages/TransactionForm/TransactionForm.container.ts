import { connect } from 'react-redux';

import { AppState } from '@store';
import { addTransaction } from '@store/transaction';
import { getUsers } from '@store/user';

import { TransactionForm } from './TransactionForm';
import { DispatchProps, StateProps } from './types';

const mapStateToProps = ({ loading, user }: AppState): StateProps => ({
    isLoading: loading.transactionForm.isLoading,
    members: user.data
});

const mapDispatchToProps: DispatchProps = {
    getMembers: getUsers,
    postTransaction: addTransaction
};

export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(TransactionForm);
