import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpenVideoUpload: false,
  isUploaded: false,
  videoFile: {},
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
    setVideoFile(state, action) {
      state.videoFile = action.payload
    },
  },
})

export const { setVideoUpload, setIsUploaded, setVideoFile } = videoUploadSlice.actions

export default videoUploadSlice.reducer
