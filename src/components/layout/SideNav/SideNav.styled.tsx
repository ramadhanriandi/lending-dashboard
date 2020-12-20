import { SideNav as MedlySideNav } from '@medly-components/layout';
import { styled } from '@styled';

export const MedlySideNavItem = styled(MedlySideNav.Nav)`
    margin-bottom: 16px;

    &:last-child {
        margin-bottom: 0;
    }
`;
