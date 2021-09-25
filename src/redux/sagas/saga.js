
import axios from 'axios'
import {select, join, all, call, fork, spawn, put, delay, take, takeEvery, takeLatest} from 'redux-saga/effects'
import { getBasisData, getFavorites } from './getBasisData/basisData'

import store from '../../redux/store'
// async function addFavoriteFlighs(flighs, favorites) {
//     // const obj = flighs.map(item => {
//     //     return {
//     //         ...item,
//     //         parentId: item.id
//     //     }
//     // })

//     // let filterFav = favorites.find((item) => item.parentId === obj.id)
//     // console.log('filterFav: ', filterFav);
//     //     try {
//     //         if (filterFav) {
//     //             await axios.delete(`https://6116b4cd095013001796b0a1.mockapi.io/favorites/${filterFav.id}`)
//     //         } else {
//     //             const {data} = await axios.post('https://6116b4cd095013001796b0a1.mockapi.io/favorites', obj)
//     //             console.log(obj);
//     //             return data
//     //         }
//     //         const {data} = await axios.get('https://6116b4cd095013001796b0a1.mockapi.io/favorites')
//     //         return data
//     //     } catch (error) {
//     //         alert(error)
//     //     }
// }

// const getFlighs = async (pattern) => {
//     const {data} = await axios(`https://612277c4d446280017054885.mockapi.io/${pattern}`)
//     return data
// }
const addEd = (obj) => axios.post('https://6116b4cd095013001796b0a1.mockapi.io/favorites', obj) 

function* apiGet(obj) {
    console.log('apiGet')
    const {data} = yield call(addEd, obj)
    yield put({type: 'ADD_FAVORITE', favoriteObj: data})
}

function* clickAdd(arg) {

    console.log('2131231232131')
    // const items = store.getState()

    // let filterFav = arg.favoritesItems.find(item => item.parentId === .id)
    

    while(true) {
        yield call(apiGet, arg.objFavorite)
        break
    }
    // if (filterFav) {
    //             axios.delete(`https://6116b4cd095013001796b0a1.mockapi.io/favorites/${filterFav.id}`)
    //             return 
    //     }  else  {
    //         const {data} = axios.post('https://6116b4cd095013001796b0a1.mockapi.io/favorites', arg.objFavorite)
    //         yield put({type: 'ADD_FAVORITE', favoriteObj: data})
    //         return
    //     }
    // yield call(getFavorites)
}

function* addFavorite() {
    yield takeEvery('ADD_FAVORITE', clickAdd, ...arguments)
}

export function* generator() {
    const sagas = [getBasisData, addFavorite]

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

// watcher worker effects
// join, select 

// fork - если будет ошибка в саге получения данных то дальше саги не будут выполняться
// spawn - если бует ошибка в верхней части саги то spawn продолжит свое выполнения дальнейших саг не смотря на ошибку верхней саги

/**
    yield spawn(getFlighs) здесь ошибка но все же spawn даст возможность выполнить следующую сагу 
    console.log('flighs');
    yield fork(getFavorites) 
    console.log("favorites");
 */

/**
    yield fork(getFlighs) здесь ошибка но fork не даст выполнить сагу даже со spawn
    console.log('flighs');
    yield spawn(getFavorites) 
    console.log("favorites");
 */

//     const {data} = await axios.get(`https://612277c4d446280017054885.mockapi.io/${pattern}`)
// yield put({type: 'GET_FLIGHS', flighs: dataFlighs})
// yield put({type: 'GET_FAVORITES', favorite: dataFavorites})