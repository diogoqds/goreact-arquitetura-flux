import { all, takeLatest } from 'redux-saga/effects';

import { Types as FavotiteTypes } from '../ducks/favorites';
import { favoriteSaga } from './favorites';

export default function* rootSaga() {
  yield all([takeLatest(FavotiteTypes.ADD_REQUEST, favoriteSaga)]);
}
