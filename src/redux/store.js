import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootRedusers from './redusers/index'
import {generator} from './sagas/saga'

const sagaMiddleWare = createSagaMiddleware()

let store = createStore(rootRedusers,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
        applyMiddleware(sagaMiddleWare)
))
sagaMiddleWare.run(generator)

export default store
