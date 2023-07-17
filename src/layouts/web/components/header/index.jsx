import {useState} from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import logoDark from '@/assets/images/petbook-dark-logo.png'
import Auth from './auth'

const Header = () => {
  const [navbar, setNavbar] = useState(false)
  const handleNavbar = () => {
    setNavbar(!navbar)
  }
  return (
    <nav>
      <div>
        <img src={logoDark} alt='' />
      </div>
      <div>
        <ul>
          <li>
            <a href='/'>Anasayfa</a>
          </li>
          <li>
            <a href='/Hakkimizda'>Hakkımızda</a>
          </li>
          <li>
            <a href='#'>Blog</a>
          </li>
          <li>
            <a href='#'>İletişim</a>
          </li>
        </ul>
      </div>
        <Auth />
    </nav>
  )
}

export default Header
