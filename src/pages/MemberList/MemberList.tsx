import { PageContent, Title } from '@components/layout';
import { Table } from '@medly-components/core';
import React from 'react';
import { COLUMNS } from './constants';
import { Props } from './types';

const tableData = [
    {
        userId: '1',
        name: 'First',
        birthDate: '12 Desember 2020',
        address: 'Jalan Kubang'
    },
    {
        userId: '2',
        name: 'First',
        birthDate: '12 Desember 2020',
        address: 'Jalan Kubang'
    },
    {
        userId: '3',
        name: 'First',
        birthDate: '12 Desember 2020',
        address: 'Jalan Kubang'
    },
    {
        userId: '4',
        name: 'First',
        birthDate: '12 Desember 2020',
        address: 'Jalan Kubang'
    }
];

export const MemberList: React.SFC<Props> = ({ isLoading }) => (
    <PageContent isLoading={isLoading}>
        <Title text="Member List" />
        <Table data={tableData} columns={COLUMNS} />
    </PageContent>
);
