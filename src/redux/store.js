import { configureStore } from '@reduxjs/toolkit'
import user from './slices/userDataSlice'

export const store = configureStore({
  reducer: {
    user,
  },
})
