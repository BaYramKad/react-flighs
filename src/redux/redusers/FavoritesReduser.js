
let initialState = {
    favoriteItems: []
}

const FavoritesReduser = (state = initialState, action) => {
    switch(action.type){
        case 'GET_FAVORITES_FLIGHS':
            return {
             ...state,
             favoriteItems: action.favorites
            }
        case 'ADD_FAVORITE':
            return {
                ...state, 
                favoriteItems: [ ...state.favoriteItems, action.favoriteObj ]
              }
        default :
            return state
    }
}

export default FavoritesReduser