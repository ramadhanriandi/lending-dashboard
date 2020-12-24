import { Text } from '@medly-components/core';
import { WithStyle } from '@medly-components/utils';
import React from 'react';
import * as Styled from './Title.styled';
import { Props } from './types';

export const Title: React.SFC<Props> & WithStyle = props => {
    return (
        <Styled.Title>
            <Text textWeight="Strong" textVariant="body1">
                {props.text}
            </Text>
        </Styled.Title>
    );
};

Title.displayName = 'Title';
Title.Style = Styled.Title;
