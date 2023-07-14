import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './components/header'

const WebLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default WebLayout
