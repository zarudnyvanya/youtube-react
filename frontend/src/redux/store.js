import {configureStore} from '@reduxjs/toolkit'

import user from './slices/userDataSlice'
import navigation from './slices/navigationSlice'
import userPopup from './slices/popupSlice'
import genres from './slices/genresSlice'
import videoUpload from './slices/videoUploadSlice'
import search from './slices/searchSlice'
import manage from './slices/manageVideoSlice'
export const store = configureStore({
	reducer: {
		user,
		navigation,
		userPopup,
		genres,
		videoUpload,
		search,
		manage,
	},
})
