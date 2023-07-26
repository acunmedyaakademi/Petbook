import {useState} from 'react'
import logoDark from '@/assets/images/petbook-light-logo-write-1.png'
import Auth from './auth'
import {Link, NavLink} from 'react-router-dom'
import {NAVBAR_MENU} from '@/utils/consts/navbar'
import classNames from 'classnames'
import Appearance from './components/appearance'
import {BiBone} from 'react-icons/bi'

const Header = () => {
  const [colorChange, setColorchange] = useState(false)
  const [show, setShow] = useState(false)
  const [menuScreen, setMenuScreen] = useState(false)

  const handleShow = () => {
    setShow(!show)
  }

  const handleMenuScreen = () => {
    if (window.innerWidth <= 639) {
      setMenuScreen(true)
    } else {
      setMenuScreen(false)
    }
  }

  const changeNavbarColor = () => {
    if (window.scrollY >= 550) {
      setColorchange(true)
    } else {
      setColorchange(false)
    }
  }
  window.addEventListener('resize', handleMenuScreen)
  window.addEventListener('scroll', changeNavbarColor)

  return (
    <nav
      className={classNames(
        'flex fixed top-0 w-full left-0 justify-between h-16 py-2 items-center px-8 transition-all duration-300 lg:px-36',
        {
          'h-12 bg-neutral-8/80': colorChange && !show,
          'h-12 bg-neutral-8/95': show,
          'bg-transparent': !colorChange,
        }
      )}
    >
      <Link to='/' className='relative w-52'>
        <img src={logoDark} alt='' className='w-full h-full object-contain' />
      </Link>
      <div
        className={classNames('sm:block transition-all duration-300', {
          'absolute bg-neutral-8/95 top-16 left-0 w-full h-[calc(100vh-64px)]': show,
          'absolute bg-neutral-8/95 sm:opacity-100 top-16 -left-[639px] w-full h-[calc(100vh-64px)]':
            !show && menuScreen,
        })}
      >
        <ul
          className={classNames('flex gap-12 text-white font-bold transition-all duration-300', {
            'flex-col w-full gap-0 h-full justify-between': show,
          })}
        >
          {NAVBAR_MENU.map((menu, key) => (
            <NavLink
              key={key}
              to={menu.path}
              className={({isActive}) =>
                classNames('relative transition-all duration-300 ease-in-out', {
                  'text-neutral-0 before:w-0 before:h-1 before:absolute before:-bottom-1 before:rounded-full before:right-0 before:bg-primary-0 before:transition-all before:duration-700 hover:before:w-full hover:before:left-0 hover:before:bg-state-orange hover:text-state-blue':
                    !isActive && !show,
                  'text-state-blue  after:content-[""] after:block after:absolute after:bg-state-orange after:h-1 after:w-full after:-bottom-1 after:left-0 after:rounded-full':
                    isActive && !show,
                  'w-full self-center': show,
                  'text-neutral-0 hover:text-state-blue': !isActive && show,
                  'text-state-blue': isActive && show,
                })
              }
            >
              {menu.title}
            </NavLink>
          ))}
        </ul>
      </div>
      <div className='flex gap-8 items-center select-none'>
        <Appearance />
        <div
          className='sm:hidden text-neutral-0 flex flex-col transition-all duration-200 cursor-pointer relative w-5 h-5'
          onClick={handleShow}
        >
          <BiBone
            size={30}
            className={classNames('rotate-45 -mb-1.5 w-full h-full transition-all duration-300', {
              'absolute rotate-90 top-0 left-0': show,
            })}
          />
          <BiBone
            size={30}
            className={classNames('rotate-45 w-full h-full transition-all duration-300', {
              'absolute rotate-6 top-0 left-0': show,
            })}
          />
        </div>
        <div className='hidden sm:block'>
          <Auth />
        </div>
      </div>
    </nav>
  )
}

export default Header
