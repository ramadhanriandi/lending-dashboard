import { renderWithRouter } from '@test-utils';
import React from 'react';
import reduxMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { initialState } from '@store';
import UserTransactions from './UserTransactions.container';

describe('UserTransactions', () => {
    const mockStore = reduxMockStore(),
        renderUserTransactions = (store: ReturnType<typeof mockStore>) =>
            renderWithRouter(
                <Provider store={store}>
                    <UserTransactions />
                </Provider>
            );

    it('should render properly', () => {
        const store = mockStore({ ...initialState, loading: { userTransactions: { isLoading: false } } });
        const { container } = renderUserTransactions(store);
        expect(container).toMatchSnapshot();
    });

    it('should show loading if isLoading Prop is true', () => {
        const store = mockStore({ ...initialState, loading: { userTransactions: { isLoading: true } } });
        const { container } = renderUserTransactions(store);
        expect(container).toMatchSnapshot();
    });
});
