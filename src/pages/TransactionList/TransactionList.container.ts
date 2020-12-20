import { AppState } from '@store';
import { connect } from 'react-redux';
import { StateProps } from './types';
import { TransactionList } from './TransactionList';

const mapStateToProps = ({ loading }: AppState): StateProps => ({
    isLoading: loading.transactionList.isLoading
});

export default connect<StateProps, {}>(mapStateToProps, {})(TransactionList);
