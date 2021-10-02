import { FAVORITE } from "./types"

const addToFavorite = (item) => ({type: FAVORITE, favoriteObj: item})

export default addToFavorite
