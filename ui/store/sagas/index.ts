import { all } from 'redux-saga/effects';
import newsSagas from '@store/sagas/news';

// combine all sagas
export default function* rootSaga(): Generator {
  yield all([
    ...newsSagas,
  ]);
}
