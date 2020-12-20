import { PageContent } from '@components/layout';
import { Text } from '@medly-components/core';
import React from 'react';
import { Props } from './types';

export const UserTransactions: React.SFC<Props> = ({ isLoading }) => (
    <PageContent isLoading={isLoading}>
        <Text textWeight="Strong" textVariant="body1">
            User Transactions
        </Text>
    </PageContent>
);
