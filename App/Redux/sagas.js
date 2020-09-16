import { all, fork } from 'redux-saga/effects';
import formActionSaga from 'redux-form-saga';

//import all SAGAS
import { watchSplash } from '../Sagas/Splash.saga';
import { watchHome } from '../Sagas/Home.saga';

export function* sagas() {
  yield all([
    fork(formActionSaga),
    fork(watchSplash),
    fork(watchHome),
  ]);
}
