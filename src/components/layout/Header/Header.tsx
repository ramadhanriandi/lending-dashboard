import { Avatar, Text } from '@medly-components/core';
import { WithStyle } from '@medly-components/utils';
import React from 'react';
import * as Styled from './Header.styled';

export const Header: React.SFC & WithStyle = () => {
    return (
        <Styled.Header>
            <Styled.LeftSide>
                <Text textWeight="Strong" textVariant="h4">
                    Lending Dashboard
                </Text>
            </Styled.LeftSide>
            <Styled.RightSide>
                <Avatar size="M">RR</Avatar>
            </Styled.RightSide>
        </Styled.Header>
    );
};

Header.displayName = 'Header';
Header.Style = Styled.Header;

export default Header;
