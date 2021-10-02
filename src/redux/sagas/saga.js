
import {all, call, spawn} from 'redux-saga/effects'
import { getBasisData } from './getBasisData/basisData'

export function* generator() {
    const sagas = [getBasisData]

    const retrySagas = yield sagas.map(saga => {
        return spawn(function* () {
            while(true) {
                try {
                    yield call(saga)
                    break
                } catch (error) {
                    console.log(error);
                }
            }
        })
    })

    yield all(retrySagas)
}