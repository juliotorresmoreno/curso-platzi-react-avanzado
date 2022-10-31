import React from 'react'
import { Link, Nav } from './styles'
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'
import { useLocation } from 'react-router-dom'

const SIZE = '32px'

const NavBar = () => {
  const { pathname: path } = useLocation()
  const select = { 'aria-current': true }
  const current = {
    l1: path === '/' ? select : null,
    l2: path === '/favs' ? select : null,
    l3: path === '/user' ? select : null
  }
  return (
    <Nav>
      <Link to='/' {...current.l1}>
        <MdHome size={SIZE} />
      </Link>
      <Link to='/favs' {...current.l2}>
        <MdFavoriteBorder size={SIZE} />
      </Link>
      <Link to='/user' {...current.l3}>
        <MdPersonOutline size={SIZE} />
      </Link>
    </Nav>
  )
}

export default NavBar
