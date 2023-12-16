import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import RegistrationForm from './components/RegistrationForm'
import About from './components/About'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/registrationForm' element={<RegistrationForm/>}></Route>
    </Routes>
    </>
  )
}

export default App
