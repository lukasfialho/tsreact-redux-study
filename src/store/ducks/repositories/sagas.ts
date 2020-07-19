import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { loadSucess, loadFailure } from './actions';

export function* load() {
    try {
        const response = yield call(api.get, 'users/lukasfialho/repos');

        yield put(loadSucess(response.data));
    } catch(err) {
        yield put(loadFailure());
    }
}