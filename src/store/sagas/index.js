import { all, takeLatest } from 'redux-saga/effects';

import { favoriteSaga } from './favorites';

export default function* rootSaga() {
  yield all([takeLatest('ADD_FAVORITE_REQUEST', favoriteSaga)]);
}
