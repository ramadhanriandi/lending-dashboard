import { AppState } from '@store';
import { connect } from 'react-redux';
import { StateProps } from './types';
import { MemberList } from './MemberList';

const mapStateToProps = ({ loading }: AppState): StateProps => ({
    isLoading: loading.memberList.isLoading
});

export default connect<StateProps, {}>(mapStateToProps, {})(MemberList);
