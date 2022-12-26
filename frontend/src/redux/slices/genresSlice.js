import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  genres: [],
  genreIsChecked: 0,
}

const genresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {
    setGenres(state, action) {
      state.genres = action.payload
    },
    setGenresId(state, action) {
      state.genreIsChecked = action.payload
    },
  },
})

export const { setGenres, setGenresId } = genresSlice.actions

export default genresSlice.reducer
