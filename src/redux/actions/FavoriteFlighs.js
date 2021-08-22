
const FavoriteFlighsCreator = (items) => {
    return {type: 'GET_FAVORITES_FLIGHS', favorites: items}
}

export default FavoriteFlighsCreator