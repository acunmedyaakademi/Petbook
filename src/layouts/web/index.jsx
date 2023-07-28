import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './components/header'
import {useTheme} from '@/stores/app/hooks'
import useColorScheme from '@/hooks/use-color-scheme'
import {useEffect} from 'react'
import {useModals} from '@/stores/modal/hooks'
import Modals from '@/components/modals'

const WebLayout = () => {
  const modals = useModals()
  const theme = useTheme()
  const {colorScheme} = useColorScheme()

  console.log(modals)

  useEffect(() => {
    if (theme === 'default') {
      document.body.className = colorScheme
    } else {
      document.body.className = theme
    }
  }, [theme, colorScheme])

  return (
    <>
      {modals.length > 0 && <Modals />}
      <Header />
      <Outlet />
    </>
  )
}

export default WebLayout
