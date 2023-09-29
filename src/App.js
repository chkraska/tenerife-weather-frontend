import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import ContactPage from './pages/ContactPage/ContactPage'

export default function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/kontakt" element={<ContactPage/>}/>
       </Routes>
    </BrowserRouter>
  )
}

