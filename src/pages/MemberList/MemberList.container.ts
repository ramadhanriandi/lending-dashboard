import { connect } from 'react-redux';

import { AppState } from '@store';
import { getUsers } from '@store/user';

import { MemberList } from './MemberList';
import { DispatchProps, StateProps } from './types';

const mapStateToProps = ({ loading, user }: AppState): StateProps => ({
    isLoading: loading.memberList.isLoading,
    members: user.data
});

const mapDispatchToProps: DispatchProps = {
    getMembers: getUsers
};

export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(MemberList);
