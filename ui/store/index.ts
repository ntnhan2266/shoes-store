import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';

import rootSaga from '@store/sagas/index';
import { rootReducer } from '@store/reducers/index';

const saga = createSagaMiddleware();

const initializeStore = (initialState): Store => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(saga, logger),
  );
  saga.run(rootSaga);
  return store;
};

export default initializeStore;
