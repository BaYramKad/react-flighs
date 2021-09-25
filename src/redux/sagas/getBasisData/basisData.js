import {all, call, fork, put, delay} from 'redux-saga/effects'
import axios from 'axios'

function* auth() {
    yield delay(2000)
    console.log('auth status ok');
    return true
}

export function* getFavorites() {
    const {data} = yield call(axios, 'https://6116b4cd095013001796b0a1.mockapi.io/favorites')
    yield put({ type: 'GET_FAVORITES_FLIGHS', favorites: data })
    return data
}

export function* getAvia() {
    const {data} = yield call(axios, 'https://6116b4cd095013001796b0a1.mockapi.io/flighs')
    yield put({ type: 'GET_FLIGHS', flightItems: data})
    return data
}

export function* getBasisData() {
    yield all([
        fork(auth),
        fork(getAvia), 
        fork(getFavorites)
    ])
}
