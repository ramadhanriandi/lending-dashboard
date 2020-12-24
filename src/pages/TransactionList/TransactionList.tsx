import React, { useState } from 'react';

import { PageContent, Title } from '@components/layout';
import { Table } from '@medly-components/core';
import { Form } from '@medly-components/forms';

import * as Styled from './TransactionList.styled';
import { COLUMNS, SCHEMA } from './constants';
import { Props } from './types';

export const TransactionList: React.SFC<Props> = props => {
    const { getTransactions, isLoading, transactions } = props;

    const [open, setOpen] = useState<boolean>(false);

    const handleSubmit = (values: object): void => {
        if (values.range) {
            getTransactions(values.range);
            setOpen(true);
        }
    };

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
                onSubmit={values => handleSubmit(values)}
            />
            {open && (
                <Styled.TableWrapper>
                    <Table data={transactions} columns={COLUMNS} />
                </Styled.TableWrapper>
            )}
        </PageContent>
    );
};
