import { Routes, Route, } from 'react-router-dom'
import { useCallback, useState } from 'react';
import Users from './users/pages/Users'
import './App.css'
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './users/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './authentication/Auth';
import MainNavigation from './shared/components/UIElements/Navigation/MainNavigation';
import { AuthContext } from "./shared/components/context/auth-context"

function App() {
  const [isAuth, setIsAuth] = useState(false)

  const loginHandler = useCallback(() => {
    setIsAuth(true)
  }, [])
  const logoutHandler = useCallback(() => {
    setIsAuth(false)
  }, [])

  let routes;
  if (isAuth) {
    routes = (
      <Routes>
      <Route path="/" element={<Users />} exact />
      <Route path="/:userId/places" element={<UserPlaces />} exact />
      <Route path="/places/new" element={<NewPlace />} exact />
      <Route path="/places/:placeId" element={<UpdatePlace />} exact />
    </Routes>
    )
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<Users />} exact />
        <Route path="/:userId/places" element={<UserPlaces />} exact />
        <Route path='/auth' element={<Auth/>} exact/>
      </Routes>
    )
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn: isAuth, login: loginHandler, logout: logoutHandler }}>
      <MainNavigation />
      <main>
       {routes}
      </main>
    </AuthContext.Provider>
  )
}

export default App
