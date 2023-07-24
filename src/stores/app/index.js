import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  language: 'tr',
  theme: localStorage.getItem('theme') || 'default',
}

const app = createSlice({
  name: 'app',
  initialState,
  reducers: {
    _setLanguage(state, action) {
      state.language = action.payload
    },
    _setTheme(state, action) {
      state.theme = action.payload

      localStorage.setItem('theme', action.payload)
    },
  },
})

export const {_setTheme, _setLanguage} = app.actions
export default app.reducer
