import { AppState } from '@store';
import { connect } from 'react-redux';
import { StateProps } from './types';
import { UserTransactions } from './UserTransactions';

const mapStateToProps = ({ loading }: AppState): StateProps => ({
    isLoading: loading.userTransactions.isLoading
});

export default connect<StateProps, {}>(mapStateToProps, {})(UserTransactions);
