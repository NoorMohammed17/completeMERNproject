import { Routes, Route} from 'react-router-dom'
import Users from './users/components/Users'
import './App.css'

function App() {
 
  return (
    <>
    <Routes>
      <Route path="/" element={<Users/>} exact/>

    </Routes>
    </>
  )
}

export default App
