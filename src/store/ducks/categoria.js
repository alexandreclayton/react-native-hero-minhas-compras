import firebase from 'firebase'
// import { NavigationActions } from 'react-navigation'
// import { routes } from 'lib/navigation'

// State Login
const initialState = {
  data: [],
}

// Actions Types
export const Types = {
  LIST_CATEGORIA: 'categoria/LIST_CATEGORIA',
}

// Reducers
export default function categoria(state = initialState, action) {
  switch (action.type) {
    case Types.LIST_CATEGORIA:
      return { ...state, data: action.payload }
    default:
      return state
  }
}

// Actions Creators
export const Actions = {
  onListCategoria: () => (dispatch) => {
    firebase.database().ref('/categorias')
      .on('value', (snapshot) => {
        dispatch({ type: Types.LIST_CATEGORIA, payload: Object.values(snapshot.val()) })
      })
  },
}
