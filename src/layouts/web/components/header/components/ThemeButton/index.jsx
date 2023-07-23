import Button from '@/components/button'
import useColorScheme from '@/hooks/use-color-scheme'
import {setTheme} from '@/stores/app/actions'
import {useTheme} from '@/stores/app/hooks'
import React, {useState} from 'react'
import {BsFillMoonStarsFill, BsSunFill} from 'react-icons/bs'
import {HiComputerDesktop} from 'react-icons/hi2'

const Apperance = () => {
  const [show, setShow] = useState(false)

  const theme = useTheme()
  const {colorScheme} = useColorScheme()

  const handleShow = () => {
    setShow(!show)
  }

  return (
    <div className='relative'>
      <p className='text-white'></p>
      {theme === 'light' ? (
        <BsSunFill onClick={handleShow} className='text-white' />
      ) : (
        <BsFillMoonStarsFill onClick={handleShow} className='text-white' />
      )}
      {show ? (
        <div className='absolute overflow-hidden w-36 flex rounded-xl flex-col bg-primary-2 -right-5 top-[22px]'>
          <Button
            onClick={() => {
              setTheme('light')
              setShow(false)
            }}
            variant={theme === 'light' ? 'activeTheme' : 'theme'}
            size='theme'
          >
            <BsSunFill />{' '}
            <span className={theme === 'light' ? 'text-neutral-0' : 'text-state-blue'}>Açık</span>
          </Button>
          <Button
            onClick={() => {
              setTheme('dark')
              setShow(false)
            }}
            variant={theme === 'dark' ? 'activeTheme' : 'theme'}
            size='theme'
          >
            <BsFillMoonStarsFill />{' '}
            <span className={theme === 'dark' ? 'text-neutral-0' : 'text-state-blue'}>Koyu</span>
          </Button>
          <Button
            onClick={() => {
              setTheme('default')
              setShow(false)
            }}
            variant={theme === 'default' ? 'activeTheme' : 'theme'}
            size='theme'
          >
            <HiComputerDesktop />{' '}
            <span className={theme === 'default' ? 'text-neutral-0' : 'text-state-blue'}>
              Sistem
            </span>
          </Button>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Apperance
