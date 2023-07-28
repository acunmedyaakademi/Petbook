import Button from '@/components/button'
import {modal} from '@/stores/modal/actions'
import React from 'react'

const Auth = () => {
  return (
    <>
      <Button
        as='button'
        onClick={() => {
          modal.append('auth.login')
        }}
        variant='navv'
      >
        Giriş Yap
      </Button>
    </>
  )
}

export default Auth
