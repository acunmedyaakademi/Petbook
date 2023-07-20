import React from 'react'

const NavLink = ({sendLink, children}) => {
  return (
    <li>
      <Link to={sendLink}>{children}</Link>
    </li>
  )
}

export default NavLink
