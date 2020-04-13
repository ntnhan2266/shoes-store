import {
  put, takeLatest, fork,
} from 'redux-saga/effects';

import { GET_NEWS } from '@store/actionTypes/index';
import { newsReceived } from '@store/actions/index';

function* fetchNews(): Generator {
  const res = yield fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json());
  yield put(newsReceived(res as Array<string>));
}

function* actionWatcher(): Generator {
  yield takeLatest(GET_NEWS, fetchNews);
}

const newsSaga = [
  fork(actionWatcher),
];

export default newsSaga;
