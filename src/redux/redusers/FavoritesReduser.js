
let initialState = {
    fItems: []
}

const FavoritesReduser = (state = initialState, action) => {
    switch(action.type){
        case 'GET_FAVORITES_FLIGHS':
            return {
             ...state,
             fItems:  action.favorites
            }
        case 'ADD_FAVORITE':
            return {
                ...state, 
                fItems: [ ...state.fItems, action.favorite ]
              }
        default :
            return state
    }
}

export default FavoritesReduser