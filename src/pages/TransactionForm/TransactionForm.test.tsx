import { renderWithRouter } from '@test-utils';
import React from 'react';
import reduxMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { initialState } from '@store';
import TransactionForm from './TransactionForm.container';

describe('TransactionForm', () => {
    const mockStore = reduxMockStore(),
        renderTransactionForm = (store: ReturnType<typeof mockStore>) =>
            renderWithRouter(
                <Provider store={store}>
                    <TransactionForm />
                </Provider>
            );

    it('should render properly', () => {
        const store = mockStore({ ...initialState, loading: { transactionForm: { isLoading: false } } });
        const { container } = renderTransactionForm(store);
        expect(container).toMatchSnapshot();
    });

    it('should show loading if isLoading Prop is true', () => {
        const store = mockStore({ ...initialState, loading: { transactionForm: { isLoading: true } } });
        const { container } = renderTransactionForm(store);
        expect(container).toMatchSnapshot();
    });
});
