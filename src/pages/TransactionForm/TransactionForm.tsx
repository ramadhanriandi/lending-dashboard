import React, { useEffect } from 'react';

import { PageContent, Title } from '@components/layout';
import { ToastContainer, addToast } from '@medly-components/core';
import { Form, FormFieldSchema } from '@medly-components/forms';

import { Props } from './types';

export const TransactionForm: React.SFC<Props> = props => {
    const { getMembers, isLoading, members, postTransaction } = props;

    useEffect(() => {
        members.length === 0 && getMembers();
    }, []);

    const schema: FormFieldSchema = {
        userId: {
            type: 'single-select',
            label: 'Name',
            options: _.map(members, member => {
                return {
                    label: member.name,
                    value: member.userId
                };
            }),
            required: true
        },
        amount: { type: 'number', label: 'Amount', required: true },
        transactionDate: { type: 'date', label: 'Date', displayFormat: 'yyyy-MM-dd', required: true },
        transactionType: {
            type: 'radio-group',
            label: 'Transaction Type',
            options: [
                {
                    label: 'Menyerahkan',
                    value: 'MENYERAHKAN'
                },
                {
                    label: 'Mengambil',
                    value: 'MENGAMBIL'
                },
                {
                    label: 'Mengembalikan',
                    value: 'MENGEMBALIKAN'
                },
                {
                    label: 'Meminjam',
                    value: 'MEMINJAM'
                }
            ],
            required: true
        }
    };

    const handleSubmit = (values: object): void => {
        addToast({ variant: 'success', header: 'Add Transaction', message: 'Transaction successfully added' });
        postTransaction(values);
    };

    return (
        <PageContent isLoading={isLoading}>
            <Title text="Transaction Form" />
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
            <ToastContainer position="top-end" />
        </PageContent>
    );
};
