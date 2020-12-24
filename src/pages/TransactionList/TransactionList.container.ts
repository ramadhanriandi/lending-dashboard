import { connect } from 'react-redux';

import { AppState } from '@store';
import { getTransactions } from '@store/transaction';

import { TransactionList } from './TransactionList';
import { DispatchProps, StateProps } from './types';

const mapStateToProps = ({ loading, transaction }: AppState): StateProps => ({
    isLoading: loading.transactionList.isLoading,
    transactions: transaction.transactions
});

const mapDispatchToProps: DispatchProps = {
    getTransactions: getTransactions
};

export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(TransactionList);
