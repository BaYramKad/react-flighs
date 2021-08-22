
let initialState = {
    items: []
}

const flighsReduser = (state = initialState, action) => {
    switch(action.type){
        case 'GET_FLIGHS':
            return {
             ...state,
             items: action.flighs
            }
        default :
            return state
    }
    
}

export default flighsReduser