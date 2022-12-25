import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpenVideoUpload: false,
  isUploaded: false,
}

const videoUploadSlice = createSlice({
  name: 'videoUpload',
  initialState,
  reducers: {
    setVideoUpload(state, action) {
      state.isOpenVideoUpload = action.payload
    },
    setIsUploaded(state, action) {
      state.isOpenVideoUpload = action.payload
    },
  },
})

export const { setVideoUpload, setIsUploaded } = videoUploadSlice.actions

export default videoUploadSlice.reducer
