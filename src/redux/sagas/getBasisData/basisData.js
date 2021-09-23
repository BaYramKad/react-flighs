import {all, call, fork, put, delay} from 'redux-saga/effects'
import axios from 'axios'

function* auth() {
    yield delay(2000)
    console.log('auth status ok');
    return true
}

function* getAvia() {
    const {data} = yield call(axios, 'https://612277c4d446280017054885.mockapi.io/flighs')
    yield put({ type: 'GET_FLIGHS', flighs: data })
}

export function* getBasisData() {
    yield all([
        fork(auth),
        fork(getAvia)
    ])
}
