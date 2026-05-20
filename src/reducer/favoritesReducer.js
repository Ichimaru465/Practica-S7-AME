export const initialFavoritesState = {
  favorites: [],
}

export function favoritesReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_FAVORITE': {
      const exists = state.favorites.some(
        (character) => character.id === action.payload.id
      )

      if (exists) {
        return {
          ...state,
          favorites: state.favorites.filter(
            (character) => character.id !== action.payload.id
          ),
        }
      }

      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      }
    }

    case 'CLEAR_FAVORITES':
      return {
        ...state,
        favorites: [],
      }

    default:
      return state
  }
}