import { createSlice } from '@reduxjs/toolkit'


const initialState = {
	edit: false,
}

const manageVideo = createSlice({
	name: 'manage',
	initialState,
	reducers: {
		setEdit(state, action) {
			state.edit = action.payload
		},
	},
})

export const { setEdit } = manageVideo.actions

export default manageVideo.reducer



