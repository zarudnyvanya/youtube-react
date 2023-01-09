import {createSlice} from '@reduxjs/toolkit'

const initialState = {
	userData: {
		id: '',
		email: '',
		first_name: '',
		lastName: '',
		gender: '',
		birth_date: '',
		image: '',
		is_staff: false,
	},
	
	userChannel: {
		pk: null,
		user: 0,
		name: '',
		description: '',
		image: null,
		banner: null,
		logo: null,
		is_active: true,
		subscribers: 0,
	},
	userVideos: [
		{
			id: 17,
			title: '',
			description: '',
			image: '/media/image/2022/12/20/OYbYBiq6bfY_cSU6Fv2.jpg',
			file: '/media/video/2022/12/20/_React_Pizza_v2__%D0%94%D0%BB%D1%8F_%D0%BA%D0%BE%D0%B3%D0%BE_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9_%D0%BA%D1%83%D1%80%D1%81_%D0%B8_%D0%BA%D0%B0%D0%BA_%D0%B5%D0%B3%D0%BE_%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C__%D0%A7%D1%82%D0%BE_%D0%BD%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE_.mp4',
			created_at: '2022-12-20T07:04:12.848982Z',
			owner: {
				pk: 9,
				user: 9,
				name: 'AdminChannel',
				description: 'Владу надо отсосать. x2',
				image: null,
				banner: null,
				logo: null,
				is_active: true,
				subscribers: 1,
			},
			category: [2],
			views: 0,
			likes: 1,
		},
	],
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
		setUserChannel(state, action) {
			state.userChannel = action.payload
		},
		
		setUserVideos(state, action) {
			state.userVideos = action.payload
		},
		setUserToken(state, action) {
			state.userToken = action.payload
		},
		setIsAuth(state, action) {
			state.isAuth = action.payload
		},
	},
})

export const {setUserData, setUserChannel, setUserVideos, setUserToken, setIsAuth} =
	userSlice.actions

export default userSlice.reducer
