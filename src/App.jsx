import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Pitchcraft from './pages/Pitchcraft.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Pitchcraft />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
