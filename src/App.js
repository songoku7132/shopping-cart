import { Link, Route, Routes } from 'react-router-dom'
import  Home  from './pages/Home'
import  Shop  from './pages/Shop'
import './styles/App.css'
import React, { useState, useEffect } from 'react';

const App = () => {

  const [count, setCount] = useState(0);

  const addCount = (i) => {
    const el = document.getElementById(`input${i}`);
    let num = parseInt(el.value);
    setCount(prevCount => prevCount + num)
  }

  return (
    <>
      <div className='footer'>
        <nav className='navigation'>
            <div className='navBtn'>
              <Link className='navLink' to='/'>Home</Link>
            </div>
            <div className='navBtn'>
              <Link className='navLink' to='/shop'>Shop</Link>
            </div>
        </nav>
        <div className='cart'>
            <p className='counterTitle'>Cart {count}</p>
        </div>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop 
        onClick={addCount}
        />} />
      </Routes>  
    </>
  );
}

export default App;

