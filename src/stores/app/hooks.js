import {useSelector} from 'react-redux'

export const useLanguage = () => useSelector((state) => state.app.language)
export const useTheme = () => useSelector((state) => state.app.theme)
