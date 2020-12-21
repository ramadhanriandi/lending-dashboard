import { PageContent, Title } from '@components/layout';
import { Table } from '@medly-components/core';
import { Form } from '@medly-components/forms';
import React, { useState } from 'react';
import * as Styled from './TransactionList.styled';
import { COLUMNS, SCHEMA } from './constants';
import { Props } from './types';

const tableData = [
    {
        date: '12 Desember 2020',
        name: 'Name',
        transaction_type: 'Menyerahkan',
        amount: 100000
    },
    {
        date: '12 Desember 2020',
        name: 'Name',
        transaction_type: 'Mengambil',
        amount: 100000
    },
    {
        date: '12 Desember 2020',
        name: 'Name',
        transaction_type: 'Mengembalikan',
        amount: 100000
    },
    {
        date: '12 Desember 2020',
        name: 'Name',
        transaction_type: 'Meminjam',
        amount: 100000
    }
];

export const TransactionList: React.SFC<Props> = ({ isLoading }) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <PageContent isLoading={isLoading}>
            <Title text="Transaction List" />
            <Form
                fieldSchema={SCHEMA}
                actionSchema={{
                    alignItems: 'right',
                    flexDirection: 'row',
                    actions: [
                        {
                            type: 'reset',
                            variant: 'flat',
                            label: 'Clear'
                        },
                        {
                            type: 'submit',
                            edges: 'rounded',
                            label: 'Submit'
                        }
                    ]
                }}
                onSubmit={() => setOpen(true)}
            />
            {open && (
                <Styled.TableWrapper>
                    <Table data={tableData} columns={COLUMNS} />
                </Styled.TableWrapper>
            )}
        </PageContent>
    );
};
