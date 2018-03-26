// State Login
const initialState = {
  open: false,
}

// Actions Types
export const Types = {
  DRAWER_OPEN: 'drawer/OPEN',
}

// Reducers
export default function favorites(state = initialState, action) {
  switch (action.type) {
    case Types.DRAWER_OPEN:
      return { ...state, open: !state.open }
    default:
      return state
  }
}

// Actions Creators
export const Actions = {
  onToggleDrawer: () => ({
    type: Types.DRAWER_OPEN,
  }),
}
