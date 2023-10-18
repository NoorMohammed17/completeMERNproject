import { Routes, Route,  } from 'react-router-dom'
import Users from './users/pages/Users'
import './App.css'
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './users/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './authentication/Auth';
import MainNavigation from './shared/components/UIElements/Navigation/MainNavigation';

function App() {
 
  return (
    <>
    <MainNavigation/>
    <main>
    <Routes>
      <Route path="/" element={<Users/>} exact/>
      <Route path="/:userId/places" element={<UserPlaces/>} exact/>
      <Route path="/places/new" element={<NewPlace/>} exact/>
      <Route path="/places/:placeId" element={<UpdatePlace/>} exact/>
      <Route path='/auth' element={<Auth/>} exact/>
    </Routes>
    </main>
    </>
  )
}

export default App
