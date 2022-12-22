import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userData: {
    id: '',
    email: '',
    first_name: '',
    lastName: '',
  },
  userToken: '',
  isAuth: false,
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
    setIsAuth(state, action) {
      state.isAuth = action.payload
    },
  },
})

export const { setUserData, setUserToken, setIsAuth } = userSlice.actions

export default userSlice.reducer
