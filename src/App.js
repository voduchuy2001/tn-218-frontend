import React from 'react';
import './App.css';
import './grid.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Home from './components/Home/Home';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserLayout from './layouts/UserLayout';
import Login from './components/forms/Login';
import Register from './components/forms/Register';
import ListProducts from './components/product/ListProducts';
import ChangePassword from './components/forms/ChangePassword';

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<UserLayout />}>
          <Route index element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/change-password' element={<ChangePassword />}/>
          <Route path='/products' element={<ListProducts />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;