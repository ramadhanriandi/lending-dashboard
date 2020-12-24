import React, { useEffect, useState } from 'react';

import { PageContent, Title } from '@components/layout';
import { Table } from '@medly-components/core';
import { Form, FormFieldSchema } from '@medly-components/forms';

import * as Styled from './UserTransactions.styled';
import { COLUMNS, SCHEMA } from './constants';
import { Props } from './types';

export const UserTransactions: React.SFC<Props> = props => {
    const { getMembers, getTransactions, isLoading, members, transactions } = props;

    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        members.length === 0 && getMembers();
    }, []);

    const schema: FormFieldSchema = {
        name: {
            type: 'single-select',
            label: 'Name',
            options: _.map(members, member => {
                return {
                    label: member.name,
                    value: member.userId
                };
            }),
            required: true
        }
    };

    const handleSubmit = (values: object): void => {
        getTransactions(values.name);
        setOpen(true);
    };

    return (
        <PageContent isLoading={isLoading}>
            <Title text="User Transactions" />
            <Form
                fieldSchema={schema}
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
