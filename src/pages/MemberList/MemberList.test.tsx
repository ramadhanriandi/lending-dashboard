import { renderWithRouter } from '@test-utils';
import React from 'react';
import reduxMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { initialState } from '@store';
import MemberList from './MemberList.container';

describe('MemberList', () => {
    const mockStore = reduxMockStore(),
        renderMemberList = (store: ReturnType<typeof mockStore>) =>
            renderWithRouter(
                <Provider store={store}>
                    <MemberList />
                </Provider>
            );

    it('should render properly', () => {
        const store = mockStore({ ...initialState, loading: { memberList: { isLoading: false } } });
        const { container } = renderMemberList(store);
        expect(container).toMatchSnapshot();
    });

    it('should show loading if isLoading Prop is true', () => {
        const store = mockStore({ ...initialState, loading: { memberList: { isLoading: true } } });
        const { container } = renderMemberList(store);
        expect(container).toMatchSnapshot();
    });
});
