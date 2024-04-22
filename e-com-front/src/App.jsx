import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import { Redirect } from 'react-router'
import ProductList from './pages/ProductList'
import ProductPage from './pages/ProductPage'
import Registration from './pages/Registration'
import LogIn from './pages/LogIn'
import Cart from './pages/Cart'
import Success from './pages/Success';
import { useSelector } from 'react-redux';

function App() {
  // const navigate = useNavigate()

  const user = useSelector((state) => state.user.currentUser);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products/:category' element={<ProductList />} />
          <Route path='/product/:id' element={<ProductPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/success' element={<Success />} />
          {/* 
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/register' element={<Registration />} /> */}

          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <LogIn />}
          />
          <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <Registration />}
          />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
