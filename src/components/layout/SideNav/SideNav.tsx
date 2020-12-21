import { Text } from '@medly-components/core';
import { AssignmentIndIcon, ListIcon, ReceiptIcon, SupervisedUserCircleIcon } from '@medly-components/icons';
import { MedlySidenavHeader, SideNav as MedlySideNav } from '@medly-components/layout';
import { WithStyle } from '@medly-components/utils';
import React, { useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import * as Styled from './SideNav.styled';

export const SideNav: React.SFC & WithStyle = React.memo(() => {
    const { pathname } = useLocation(),
        history = useHistory(),
        handlePathChange = useCallback((page: string) => history.push(page), [history]);

    return (
        <MedlySideNav onChange={handlePathChange} active={pathname} defaultActive="/">
            <MedlySidenavHeader />
            <MedlySideNav.List>
                <Styled.MedlySideNavItem path="/">
                    <SupervisedUserCircleIcon />
                    <Text>Member List</Text>
                </Styled.MedlySideNavItem>
                <Styled.MedlySideNavItem path="/transaction-form">
                    <ReceiptIcon />
                    <Text>Transaction Form</Text>
                </Styled.MedlySideNavItem>
                <Styled.MedlySideNavItem path="/transactions">
                    <ListIcon />
                    <Text>Transaction List</Text>
                </Styled.MedlySideNavItem>
                <Styled.MedlySideNavItem path="/user-transactions">
                    <AssignmentIndIcon />
                    <Text>User&apos;s Transactions</Text>
                </Styled.MedlySideNavItem>
            </MedlySideNav.List>
        </MedlySideNav>
    );
});
SideNav.displayName = 'AppSideNav';
SideNav.Style = MedlySideNav.Style;
