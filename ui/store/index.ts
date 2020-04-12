import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';

import rootSaga from '@sagas/index';
import rootReducer from '@reducers/index';

const saga = createSagaMiddleware();

const initializeStore = (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(saga, logger),
  );
  saga.run(rootSaga);
  return store;
};

export default initializeStore;
