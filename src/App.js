import { Link, Route, Routes } from 'react-router-dom'
import  Home  from './pages/Home'
import  Shop  from './pages/Shop'
import './styles/App.css'

function App() {
  return (
    <>
      <nav className='navigation'>
            <div className='navBtn'>
            <Link className='navLink' to='/'>Home</Link>
            </div>
            <div className='navBtn'>
            <Link className='navLink' to='/shop'>Shop</Link>
            </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>  
    </>
  );
}

export default App;
