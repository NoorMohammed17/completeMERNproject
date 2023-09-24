import { Routes, Route,  } from 'react-router-dom'
import Users from './users/pages/Users'
import './App.css'
import NewPlace from './places/components/NewPlace';
import MainNavigation from './shared/components/UIElements/Navigation/MainNavigation';

function App() {
 
  return (
    <>
    <MainNavigation/>
    <Routes>
      <Route path="/" element={<Users/>} exact/>
      <Route path="/places/new" element={<NewPlace/>} exact/>
      

    </Routes>
    </>
  )
}

export default App
