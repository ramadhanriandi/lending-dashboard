import React, { useEffect } from 'react';

import { PageContent, Title } from '@components/layout';
import { Table } from '@medly-components/core';

import { COLUMNS } from './constants';
import { Props } from './types';

export const MemberList: React.SFC<Props> = props => {
    const { getMembers, isLoading, members } = props;

    useEffect(() => {
        getMembers();
    }, []);

    return (
        <PageContent isLoading={isLoading}>
            <Title text="Member List" />
            <Table data={members} columns={COLUMNS} />
        </PageContent>
    );
};
