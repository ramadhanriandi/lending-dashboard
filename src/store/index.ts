import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas';
import { initialState as transactionInitialState, transaction } from './transaction';
import { initialState as userInitialState, user } from './user';
import { initialState as loadingInitialState, loading } from './loading';

export const initialState = {
        transaction: transactionInitialState,
        user: userInitialState,
        loading: loadingInitialState
    },
    sagaMiddleware = createSagaMiddleware(),
    rootReducer = combineReducers({
        transaction,
        user,
        loading
    }),
    store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export type AppState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;
