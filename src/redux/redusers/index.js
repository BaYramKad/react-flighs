
import { combineReducers } from 'redux'
import FavoritesReduser from './FavoritesReduser'
import FlighsReduser from './FlighsReduser'

const rootRedusers = combineReducers({
    flightItems: FlighsReduser, 
    favoritesFlighs: FavoritesReduser
})

export default rootRedusers