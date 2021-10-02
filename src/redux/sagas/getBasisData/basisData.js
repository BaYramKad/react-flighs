import {all, call, fork, put, delay, takeEvery, select} from 'redux-saga/effects'
import axios from 'axios'
import { FAVORITE } from '../../actions/types'

const deleteFavoritePost = async (id) => {
    await axios.delete(`https://6116b4cd095013001796b0a1.mockapi.io/favorites/${id}`)
}

const getFavoritePost = async (obj) => {
    let {data} = await axios.post('https://6116b4cd095013001796b0a1.mockapi.io/favorites', obj)
    return data
}

function* postFavorite(args) {
    let favorites = yield select(state => state.favoritesFlighs.favoriteItems)
    let findObj = favorites.find(obj => obj.parentId === args.favoriteObj.id)

    if (findObj) {
        yield call(deleteFavoritePost, findObj.id)
    } else {
        let data = yield call(getFavoritePost, args.favoriteObj)
        put({type: FAVORITE, favoriteObj: data})
    }
    yield all([
        fork(getFavorites)
    ])
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
        fork(getAvia), 
        fork(getFavorites)
    ])
    
    yield takeEvery(FAVORITE, postFavorite, ...arguments )
}