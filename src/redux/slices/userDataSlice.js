import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userData: {
    id: '',
    email: '',
    first_name: '',
    lastName: '',
  },
  userToken: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, action) {
      state.userData = action.payload
    },
    setUserToken(state, action) {
      state.userToken = action.payload
    },
    setUserId(state, action) {
      state.userId = action.payload
    },
    setUserEmail(state, action) {
      state.userEmail = action.payload
    },
  },
})

export const { setUserData, setUserToken, setUserId, setUserEmail } = userSlice.actions

export default userSlice.reducer
