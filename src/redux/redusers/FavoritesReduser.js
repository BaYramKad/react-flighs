import { GET_FAVORITES_FLIGHS } from "../actions/types"

let initialState = {
    favoriteItems: []
}


const FavoritesReduser = (state = initialState, action) => {
    console.log(state);
    switch(action.type){
        case GET_FAVORITES_FLIGHS:
            return {
             ...state,
             favoriteItems: action.favorites
            }
        default :
            return state
    }
}

export default FavoritesReduser