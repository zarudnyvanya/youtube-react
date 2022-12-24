import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  popup: false,
}

const popupSlice = createSlice({
  name: 'userPopup',
  initialState,
  reducers: {
    setUserPopup(state, action) {
      state.popup = action.payload
    },
  },
})

export const { setUserPopup } = popupSlice.actions

export default popupSlice.reducer
