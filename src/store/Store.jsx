import {configureStore} from '@reduxjs/toolkit';
import RootReducer from './Reducer/RootReducer';
import RootSagas from './Sagas/RootSagas';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: RootReducer,
    middleware: ()=>[sagaMiddleware]
})
export default store;

sagaMiddleware.run(RootSagas);