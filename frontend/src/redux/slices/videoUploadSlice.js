import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isUploaded: false,
  isOpen: false,
  isOpenFormat: false,
  videoFile: null,
  posterIsUploaded: false,
  buttonDisabled: false,
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
    setIsOpenFormat(state, action) {
      state.isOpenFormat = action.payload
    },
    setVideoFile(state, action) {
      state.videoFile = action.payload
    },
    setPosterIsUploaded(state, action) {
      state.posterIsUploaded = action.payload
    },
    setButtonDisabled(state, action) {
      state.buttonDisabled = action.payload
    },
  },
})

// export const { setVideoUpload, setIsUploaded, setVideoFile } = videoUploadSlice.actions
export const {
  setIsOpen,
  setVideoUpload,
  setVideoFile,
  setButtonDisabled,
  setPosterIsUploaded,
  setIsOpenFormat,
} = videoUploadSlice.actions

export default videoUploadSlice.reducer
