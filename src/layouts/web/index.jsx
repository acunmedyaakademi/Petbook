import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './components/header'
import {useTheme} from '@/stores/app/hooks'
import useColorScheme from '@/hooks/use-color-scheme'
import {useEffect} from 'react'

const WebLayout = () => {
  const theme = useTheme()
  const {colorScheme} = useColorScheme()

  useEffect(() => {
    if (theme === 'default') {
      document.body.className = colorScheme
    } else {
      document.body.className = theme
    }
  }, [theme, colorScheme])

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default WebLayout
