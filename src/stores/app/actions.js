import {_setTheme, _setLanguage} from '.'
import store from '..'

export const setTheme = (theme) => store.dispatch(_setTheme(theme))
export const setLanguage = (language) => store.dispatch(_setLanguage(language))
