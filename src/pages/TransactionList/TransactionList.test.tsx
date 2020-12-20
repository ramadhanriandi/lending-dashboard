import { renderWithRouter } from '@test-utils';
import React from 'react';
import reduxMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { initialState } from '@store';
import TransactionList from './TransactionList.container';

describe('TransactionList', () => {
    const mockStore = reduxMockStore(),
        renderTransactionList = (store: ReturnType<typeof mockStore>) =>
            renderWithRouter(
                <Provider store={store}>
                    <TransactionList />
                </Provider>
            );

    it('should render properly', () => {
        const store = mockStore({ ...initialState, loading: { transactionList: { isLoading: false } } });
        const { container } = renderTransactionList(store);
        expect(container).toMatchSnapshot();
    });

    it('should show loading if isLoading Prop is true', () => {
        const store = mockStore({ ...initialState, loading: { transactionList: { isLoading: true } } });
        const { container } = renderTransactionList(store);
        expect(container).toMatchSnapshot();
    });
});
