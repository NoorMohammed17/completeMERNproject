import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/auth-context'
import './NavLinks.css'

const NavLinks = () => {
  const auth = useContext(AuthContext);
  return (
    <ul className='nav-links'>
      <li><NavLink to='/' exact='true'>ALL USERS</NavLink></li>
      {auth.isLoggedIn && (
      <li><NavLink to='/u1/places' >MY PLACES</NavLink></li>
      )}
      {auth.isLoggedIn && (
      <li><NavLink to='/places/new' >ADD PLACE</NavLink></li>
      )}
      {!auth.isLoggedIn && (
      <li><NavLink to='/auth' >AUTHENTICATE </NavLink></li>
      )}
      {auth.isLoggedIn && (
        <li><button onClick={auth.logout}>LOGOUT</button></li>
      )}
      {/*  NOTE :- just point to logout , onCLick will handle the execution */}

    </ul>
  )
}

export default NavLinks
