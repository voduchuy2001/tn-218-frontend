import React from 'react'
import { Outlet } from 'react-router-dom'
import Banner from '../components/banner/Banner'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Navbar from '../components/navbar/Navbar'

const UserLayout = () => {
  return (
    <>
    <Header />
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

export default UserLayout