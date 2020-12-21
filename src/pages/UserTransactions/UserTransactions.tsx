import { PageContent, Title } from '@components/layout';
import { Table } from '@medly-components/core';
import { Form } from '@medly-components/forms';
import React, { useState } from 'react';
import * as Styled from './UserTransactions.styled';
import { COLUMNS, SCHEMA } from './constants';
import { Props } from './types';

const tableData = [
    {
        date: '12 Desember 2020',
        transactionType: 'Menyerahkan',
        amount: 100000
    },
    {
        date: '12 Desember 2020',
        transactionType: 'Mengambil',
        amount: 100000
    },
    {
        date: '12 Desember 2020',
        transactionType: 'Mengembalikan',
        amount: 100000
    },
    {
        date: '12 Desember 2020',
        transactionType: 'Meminjam',
        amount: 100000
    }
];

export const UserTransactions: React.SFC<Props> = ({ isLoading }) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <PageContent isLoading={isLoading}>
            <Title text="User Transactions" />
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
