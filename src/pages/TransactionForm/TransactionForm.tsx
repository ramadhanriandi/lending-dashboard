import { PageContent, Title } from '@components/layout';
import { Form } from '@medly-components/forms';
import React from 'react';
import { SCHEMA } from './constants';
import { Props } from './types';

export const TransactionForm: React.SFC<Props> = ({ isLoading }) => (
    <PageContent isLoading={isLoading}>
        <Title text="Transaction Form" />
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
            onSubmit={values => console.log('Values==>', values)}
        />
    </PageContent>
);
