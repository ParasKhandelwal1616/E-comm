import Navbar from './Components/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import './App.css'

function App() {


  return (
    <div className='font-titillium '>
    <div >
        <Navbar />
    </div>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/cart' element ={<Cart/>} />
  
    </Routes>
    
    </div>
  )
}

export default App
