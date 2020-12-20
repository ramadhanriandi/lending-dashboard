import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const MemberList = lazy(() => import(/* webpackChunkName: "MemberList" */ /* webpackPrefetch: true */ '@pages/MemberList'));
const TransactionForm = lazy(() => import(/* webpackChunkName: "TransactionForm" */ /* webpackPrefetch: true */ '@pages/TransactionForm'));
const TransactionList = lazy(() => import(/* webpackChunkName: "TransactionList" */ /* webpackPrefetch: true */ '@pages/TransactionList'));
const UserTransactions = lazy(
    () => import(/* webpackChunkName: "UserTransactions" */ /* webpackPrefetch: true */ '@pages/UserTransactions')
);

export const Routes: React.SFC = () => (
    <Suspense fallback={<span>Loading ...</span>}>
        <Switch>
            <Route exact path="/" component={MemberList} />
            <Route exact path="/transaction-form" component={TransactionForm} />
            <Route exact path="/transactions" component={TransactionList} />
            <Route exact path="/user-transactions" component={UserTransactions} />
        </Switch>
    </Suspense>
);
