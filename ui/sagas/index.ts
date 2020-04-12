import { all } from 'redux-saga/effects';
import newsSagas from '@sagas/news';

// combine all sagas
export default function* rootSaga() {
  yield all([
    ...newsSagas,
  ]);
}
