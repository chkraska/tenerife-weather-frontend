import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import ContactPage from './pages/ContactPage/ContactPage'
import AboutPage from './pages/AboutPage/AboutPage'
import DetailsPage from './pages/DetailsPage/DetailsPage'
export default function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/kontakt" element={<ContactPage/>}/>
          <Route path="/o-nas" element={<AboutPage/>}/>
          <Route path="/detale/:id" element={<DetailsPage/>}/>
       </Routes>
    </BrowserRouter>
  )
}

