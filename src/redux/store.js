import { createStore } from 'redux'
import rootRedusers from './redusers/index'


let store = createStore(rootRedusers)

window.store = store
export default store
