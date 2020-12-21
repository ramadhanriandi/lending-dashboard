import { PageContent, Title } from '@components/layout';
import { Table } from '@medly-components/core';
import React from 'react';
import { COLUMNS } from './constants';
import { Props } from './types';

const tableData = [
    {
        user_id: '1',
        name: 'First',
        birth_date: '12 Desember 2020',
        address: 'Jalan Kubang'
    },
    {
        user_id: '2',
        name: 'First',
        birth_date: '12 Desember 2020',
        address: 'Jalan Kubang'
    },
    {
        user_id: '3',
        name: 'First',
        birth_date: '12 Desember 2020',
        address: 'Jalan Kubang'
    },
    {
        user_id: '4',
        name: 'First',
        birth_date: '12 Desember 2020',
        address: 'Jalan Kubang'
    }
];

export const MemberList: React.SFC<Props> = ({ isLoading }) => (
    <PageContent isLoading={isLoading}>
        <Title text="Member List" />
        <Table data={tableData} columns={COLUMNS} />
    </PageContent>
);
