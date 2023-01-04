import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isUploaded: false,
  isOpen: false,
  videoFile: null,
  // videoName: '',
}

const videoUploadSlice = createSlice({
  name: 'videoUpload',
  initialState,
  reducers: {
    setVideoUpload(state, action) {
      state.isUploaded = action.payload
    },
    setIsOpen(state, action) {
      state.isOpen = action.payload
    },
    setVideoFile(state, action) {
      state.videoFile = action.payload
    },
    // setVideoName(state, action) {
    //   state.videoName = action.payload
    // },
  },
})

// export const { setVideoUpload, setIsUploaded, setVideoFile } = videoUploadSlice.actions
export const { setIsOpen, setVideoUpload, setVideoFile } = videoUploadSlice.actions

export default videoUploadSlice.reducer
