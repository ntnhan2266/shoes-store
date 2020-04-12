import { put, takeLatest, fork } from 'redux-saga/effects';

import { GET_NEWS } from '@actionTypes/index';
import { newsReceived } from '@actions/index';

function* fetchNews() {
  const res = yield fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) => response.json());
  yield put(newsReceived(res));
}

function* actionWatcher() {
  yield takeLatest(GET_NEWS, fetchNews);
}

const newsSaga = [
  fork(actionWatcher),
];

export default newsSaga;
