import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  navIsOpen: false,
}

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setNavIsOpen(state, action) {
      state.navIsOpen = action.payload
    },
  },
})

export const { setNavIsOpen } = navigationSlice.actions

export default navigationSlice.reducer
