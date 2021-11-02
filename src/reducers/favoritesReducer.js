import { TOGGLE_FAVORITES, ADD_FAVORITES, REMOVE_FAVORITE } from "./../actions/favoritesActions"

const initialState = {
    favorites: [],
    displayFavorites: false,
}

const favoritesReducer = (state = initialState, action) => {
    switch(action.type){
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        case ADD_FAVORITES:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case REMOVE_FAVORITE:
            return {
                favorites: state.favorites.filter(item=>(action.payload !== item.id))
            }
    default:
        return state;
    }
}
export default favoritesReducer;