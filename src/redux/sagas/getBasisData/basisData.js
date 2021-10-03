import {all, call, fork, put, takeEvery, select} from 'redux-saga/effects'
import axios from 'axios'
import { FAVORITE } from '../../actions/types'

const deleteFavoritePost = async (id) => {
    await axios.delete(`https://6116b4cd095013001796b0a1.mockapi.io/favorites/${id}`)
}

const getFavoritePost = async (obj) => {
    await axios.post('https://6116b4cd095013001796b0a1.mockapi.io/favorites', obj)
}

function* postFavorite(args) {
    let favorites = yield select(state => state.favoritesFlighs.favoriteItems)
    let findObj = favorites.find(obj => obj.parentId === args.favoriteObj.id)

    findObj ? 
        yield call(deleteFavoritePost, findObj.id) : 
        yield call(getFavoritePost, { ...args.favoriteObj, isFavorite: !args.favoriteObj.isFavorite } )
 
    yield all([
        fork(getFavorites)
    ])
}

export function* getFavorites() {
    const {data} = yield call(axios, 'https://6116b4cd095013001796b0a1.mockapi.io/favorites')
    yield put({ type: 'GET_FAVORITES_FLIGHS', favorites: data })
    return data
}

export function* getFlightsData() {
    const {data} = yield call(axios, 'https://6116b4cd095013001796b0a1.mockapi.io/flighs')
    yield put({ type: 'GET_FLIGHS', flightItems: data})
    return data
}

export function* getBasisData() {
    yield all([
        fork(getFlightsData), 
        fork(getFavorites)
    ])
    
    yield takeEvery(FAVORITE, postFavorite, ...arguments )
}