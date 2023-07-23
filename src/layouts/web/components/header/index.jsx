import {useState} from 'react'
import {IoMdArrowDropdown} from 'react-icons/io'
import logoDark from '@/assets/images/petbook-light-logo-write-1.png'
import Auth from './auth'
import {Link, NavLink} from 'react-router-dom'
import {CircleFlag} from 'react-circle-flags'
import {NAVBAR_MENU} from '@/utils/consts/navbar'
import classNames from 'classnames'
import ThemeButton from './components/ThemeButton'

const Header = () => {
  const [navbar, setNavbar] = useState(false)
  const handleNavbar = () => {
    setNavbar(!navbar)
  }
  return (
    <nav className='flex fixed justify-around h-16 py-2 items-center top-0 w-full'>
      <Link to='/' className='relative w-52'>
        <img src={logoDark} alt='' className='w-full h-full object-contain' />
      </Link>
      <div>
        <ul className='flex gap-12 text-white font-bold'>
          {NAVBAR_MENU.map((menu, key) => (
            <NavLink
              key={key}
              to={menu.path}
              className={({isActive}) =>
                classNames('relative transition-all duration-300 ease-in-out', {
                  'text-neutral-0 before:w-0 before:h-1 before:absolute before:-bottom-1 before:rounded-full before:right-0 before:bg-primary-0 before:transition-all before:duration-700 hover:before:w-full hover:before:left-0 hover:before:bg-state-orange hover:text-state-blue':
                    !isActive,
                  'text-state-blue  after:content-[""] after:block after:absolute after:bg-state-orange after:h-1 after:w-full after:-bottom-1 after:left-0 after:rounded-full':
                    isActive,
                })
              }
            >
              {menu.title}
            </NavLink>
          ))}
        </ul>
      </div>
      <div className='flex gap-8 items-center select-none'>
        <ThemeButton />
        <div className='items-center flex gap-2'>
          <CircleFlag countryCode='tr' className='w-6' />
          <p className='text-neutral-0'>TRY</p>
          <IoMdArrowDropdown className='text-3xl text-neutral-0' />
        </div>{' '}
        <Auth />
      </div>
    </nav>
  )
}

export default Header
