import { useContext } from 'react'
import { NavLink ,useNavigate} from 'react-router-dom'
import { AuthContext } from '../../context/auth-context'
import './NavLinks.css'

const NavLinks = () => {
  const auth = useContext(AuthContext);
  const navigate= useNavigate()
  const logoutHandler = () => {
    auth.logout()
    navigate('/auth')
  }
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
        <li><button onClick={logoutHandler}>LOGOUT</button></li>
      )}
      {/*  NOTE :- just point to logout , onCLick will handle the execution */}

    </ul>
  )
}

export default NavLinks
