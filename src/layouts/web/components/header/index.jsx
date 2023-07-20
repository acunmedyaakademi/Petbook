import {useState} from 'react'
import {IoMdArrowDropdown} from 'react-icons/io'
import logoDark from '@/assets/images/petbook-light-logo-write-1.png'
import Auth from './auth'
import {Link, NavLink} from 'react-router-dom'
import {CircleFlag} from 'react-circle-flags'

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
          <NavLink to='/'>Anasayfa</NavLink>
          <NavLink to='/hakkimizda'>Hakkımızda</NavLink>
          <NavLink to='/iletisim'>İletişim</NavLink>
          <NavLink to='/blog'>Blog</NavLink>
        </ul>
      </div>
      <div className='flex gap-8'>
        <Auth />
        <div className='items-center flex gap-2'>
          <CircleFlag countryCode='tr' className='w-6' />
          <p className='text-neutral-0'>TRY</p>
          <IoMdArrowDropdown className='text-3xl text-neutral-0' />
        </div>
      </div>
    </nav>
  )
}

export default Header
