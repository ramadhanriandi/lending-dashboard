import { PageContent } from '@components/layout';
import { Text } from '@medly-components/core';
import React from 'react';
import { Props } from './types';

export const TransactionList: React.SFC<Props> = ({ isLoading }) => (
    <PageContent isLoading={isLoading}>
        <Text textWeight="Strong" textVariant="body1">
            Transaction List
        </Text>
    </PageContent>
);
