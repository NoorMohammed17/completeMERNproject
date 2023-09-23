import { Routes, Route,  } from 'react-router-dom'
import Users from './users/pages/Users'
import './App.css'
import NewPlace from './places/components/NewPlace'

function App() {
 
  return (
    <>
    <Routes>
      <Route path="/" element={<Users/>} exact/>
      <Route path="/places/new" element={<NewPlace/>} exact/>
      

    </Routes>
    </>
  )
}

export default App
