import { AppState } from '@store';
import { connect } from 'react-redux';
import { StateProps } from './types';
import { TransactionForm } from './TransactionForm';

const mapStateToProps = ({ loading }: AppState): StateProps => ({
    isLoading: loading.transactionForm.isLoading
});

export default connect<StateProps, {}>(mapStateToProps, {})(TransactionForm);
